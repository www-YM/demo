import React, { useState } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import BaseDialog from 'components/BaseDialog';
import ShopSelector from './ShopSelector';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginBottom: theme.spacing(4),
  },
}));

type Props = {
  onCancel: () => void;
  onConfirm: (shop: ShopListItem) => void;
  open: boolean;
  title?: string;
  subtitle?: any;
  filterOutId?: number | string;
  cancelButtonTitle?: string;
  confirmButtonTitle?: string;
  confirmBtnDisabled?: boolean;
  children?: React.ReactNode;
  onShopChange?: (shop: ShopListItem) => void;
};

export default function ShopSelectorDialog({
  onCancel,
  onConfirm,
  onShopChange,
  open = false,
  title = 'Choose a store',
  subtitle = '',
  filterOutId = '',
  cancelButtonTitle = 'Cancel',
  confirmButtonTitle = 'Confirm',
  confirmBtnDisabled = false,
  children,
}: Props): JSX.Element {
  const classes = useStyles();

  const [shop, setShop] = useState<ShopListItem>(null);
  const handleShopChange = (shop: ShopListItem) => {
    setShop(shop);
    onShopChange && onShopChange(shop);
  };
  const handleConfirm = () => {
    onConfirm(shop);
  };
  return (
    <BaseDialog
      maxWidth="sm"
      visible={open}
      title={title}
      onClose={() => {}}
      ContentComponent={
        <div>
          {subtitle ? <Box className={classes.subtitle}>{subtitle}</Box> : null}
          <ShopSelector
            filterOutId={filterOutId}
            onChange={handleShopChange}
            canSelectAll={false}
          />
          {children}
        </div>
      }
      ActionComponent={
        <>
          <Button color="primary" variant="outlined" onClick={onCancel}>
            {cancelButtonTitle}
          </Button>
          <Button
            color="primary"
            variant="contained"
            disabled={confirmBtnDisabled}
            onClick={handleConfirm}
          >
            {confirmButtonTitle}
          </Button>
        </>
      }
    />
  );
}
