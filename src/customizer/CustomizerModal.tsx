import React, {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useState,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import api from 'api';
import {
  CCustomizer,
  CustomizerType,
  CCustomizerSupportedEvent,
} from '@inkpod/customizer-react-component';
import { getRandomInt, isLogined } from 'utils/helpers';
import { CircularProgress } from '@material-ui/core';
import { CustomConfirmContext } from 'views/CustomProductDetail/components/context/CustomConfirmContextProvider';
import { RecustomizeData } from 'api/resources/ShopProductResource';
import { SnackBarAlertContext } from 'hooks/useSnackBarAlertContext';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  customizerWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customizerEl: {
    width: '100%',
    height: '100%',
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CustomizerModalProps {
  buttonTitle?: string;
  hideButton?: boolean;
  isRecustomizeMode?: boolean;
  buttonSize?: 'large' | 'small' | 'medium';
  getRecustomizeDataFunc?: () => Promise<RecustomizeData>;
}

const DEFAULT_REGION = 'us';

const getUserImages = async () => {
  try {
    const data = await api.image.getImages({
      page: 1,
    });
    return data;
  } catch (err) {
    return {
      data: [],
      meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        per_page: 24,
        to: 1,
        total: 2,
      },
    };
  }
};

const getUserSetting = async () => {
  try {
    const data = await api.setting.getSetting();
    return data.imageRegion;
  } catch (err) {
    return DEFAULT_REGION;
  }
};

const CustomizerModal = forwardRef(function CustomizerModal(
  {
    isRecustomizeMode = false,
    hideButton = false,
    buttonTitle = 'Start designing',
    buttonSize = 'large',
    getRecustomizeDataFunc,
  }: CustomizerModalProps,
  ref,
) {
  const { apiErrorAlert } = useContext(SnackBarAlertContext);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isLoadingRequestData, setIsLoadingRequestData] = useState(false);
  const [editor, setEditor] = useState<CCustomizer | null>(null);
  const [tasks, setTasks] = useState<{ func: string; params: any }[]>([]);

  useImperativeHandle(ref, () => ({
    openModal() {
      setOpen(true);
    },
    addImage(image: ArtworkImage) {
      if (editor) {
        editor.addUserImageData(image);
      } else {
        setTasks([...tasks, { func: 'addUserImageData', params: image }]);
      }
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    designModel,
    designData,
    setDesignData,
    setDesignModel,
    setOpenCustomConfirmDialog,
  } = useContext(CustomConfirmContext);

  const handleInitCustomizer = useCallback(async () => {
    setIsLoadingRequestData(true);

    let _designModel = designModel;
    let _designData = designData;

    if (getRecustomizeDataFunc) {
      try {
        const { model, design } = await getRecustomizeDataFunc();
        _designModel = model;
        _designData = design;
        setDesignModel(model);
        setDesignData(design);
      } catch (err) {
        setIsLoadingRequestData(false);
        setOpen(false);
        apiErrorAlert(err);
        return;
      }
    }

    const userImagesData = await getUserImages();
    const userImageRegion = await getUserSetting();

    setIsLoadingRequestData(false);

    const ccustomizer = new CCustomizer(
      {
        [CCustomizerSupportedEvent.ON_COMPLETE_DESIGN]: (data: DesignData) => {
          setDesignData(data);

          setOpenCustomConfirmDialog(true);

          handleClose();
        },
        [CCustomizerSupportedEvent.ON_CREATE_IMAGE]: async (data: any) => {
          if (isLogined()) {
            const image = await api.image.createImage(data);
            ccustomizer.addUserImageData(image);
          } else {
            ccustomizer.addUserImageData({
              ...data,
              ...{ id: getRandomInt(9999999) },
            });
          }
        },
        [CCustomizerSupportedEvent.ON_DELETE_IMAGE]: (data) => {
          api.image.deleteImage(data.id);
        },
        [CCustomizerSupportedEvent.ON_FETCH_IMAGE]: (page: number) => {
          api.image.getImages({ page }).then((data) => {
            ccustomizer.setUserImageData(data);
          });
        },
      },
      {
        region: userImageRegion,
        mode: CustomizerType.MERCHANT,
        isShowTextureDegree: true,
        autoRendering: true,
      },
    );

    ccustomizer.render('customizer-react').then(() => {
      ccustomizer.setDesignModelData(_designModel);

      // 避免未登录状态, recustomize 时 images 为空会清空定制器内上传的图片
      if (userImagesData.data.length > 0) {
        ccustomizer.setUserImageData(userImagesData);
      }

      if (isRecustomizeMode) {
        ccustomizer.restoreDesign(_designData);
      }

      for (const task of tasks) {
        ccustomizer[task.func](task.params);
      }
    });

    setEditor(ccustomizer);

    setTasks([]);

    (window as any).editor = ccustomizer;
  }, [
    designModel,
    isRecustomizeMode,
    designData,
    setDesignData,
    setDesignModel,
    setOpenCustomConfirmDialog,
    getRecustomizeDataFunc,
    tasks,
  ]);

  const handleDialogClosed = () => {
    if (editor) {
      editor.clearEvents();
    }
  };

  return (
    <>
      {!hideButton && (
        <Button
          variant="contained"
          size={buttonSize}
          color="primary"
          onClick={handleClickOpen}
          fullWidth
        >
          {buttonTitle}
        </Button>
      )}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        onEntered={handleInitCustomizer}
        onExited={handleDialogClosed}
        TransitionComponent={Transition}
        disableEnforceFocus
        disableEscapeKeyDown
      >
        <div className={classes.customizerWrap}>
          {isLoadingRequestData && <CircularProgress />}

          <div
            id="customizer-react"
            className={!isLoadingRequestData ? classes.customizerEl : null}
          ></div>
        </div>
      </Dialog>
    </>
  );
});

export default CustomizerModal;
