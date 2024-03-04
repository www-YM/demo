import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useCopyProduct from 'hooks/useCopyProduct';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseDialog from 'components/BaseDialog';
import ShopSelector from './ShopSelector';

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
}));

interface Props {
  productId: string | number;
  currentShopId: string | number;
  status: boolean;
  onClose: () => void;
}

const CopyToDialog = ({ productId, currentShopId, status, onClose }: Props) => {
  const classes = useStyles();

  const { isCoping, handleCopyProduct } = useCopyProduct();

  const [reserveSku, setReserveSku] = useState(false);

  const handleReGenerateSkus = () => {
    setReserveSku(!reserveSku);
  };

  const [shopId, setShopId] = useState(currentShopId);

  const handleShopChange = (shop: ShopListItem) => {
    setShopId(shop.id);
  };

  const handleCopyTo = async () => {
    if (!shopId) return;

    handleCopyProduct(
      {
        productId,
        shopId,
        reserveSku,
      },
      () => {
        onClose();
      },
    );
  };
  return (
    <>
      <BaseDialog
        maxWidth="sm"
        visible={status}
        title="Copy product to another store"
        onClose={onClose}
        ContentComponent={
          <div>
            <Box className={classes.subtitle}>
              <Alert severity="info">
                <Typography variant="body1">
                  Due to sales channel variations, some product details (e.g.
                  description, text formatting, tags) might be lost.
                </Typography>
              </Alert>
            </Box>

            <ShopSelector
              filterOutId={currentShopId}
              onChange={handleShopChange}
              canSelectAll={false}
            />

            <FormControlLabel
              className={classes.marginTop}
              control={
                <Switch
                  checked={!reserveSku}
                  onChange={handleReGenerateSkus}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Re-generate variant skus"
            />
          </div>
        }
        ActionComponent={
          <>
            <Button color="primary" variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              disabled={isCoping}
              onClick={handleCopyTo}
            >
              Copy product
            </Button>
          </>
        }
      />
    </>
  );
};

export default CopyToDialog;
