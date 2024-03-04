import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

type ConfirmDialogProps = {
  status: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ConfirmDialog({
  status,
  title,
  message,
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={status}
      >
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers>{message}</DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            <FormattedMessage defaultMessage="Confirm" description="Confirm" />
          </Button>
          <Button variant="outlined" onClick={onClose}>
            <FormattedMessage defaultMessage="Cancel" description="Cancel" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
