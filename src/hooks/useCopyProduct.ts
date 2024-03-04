import api from 'api';
import { useContext, useState } from 'react';
import { SnackBarAlertContext } from './useSnackBarAlertContext';

export default function useCopyProduct() {
  const { setSnackbarAlertProps } = useContext(SnackBarAlertContext);
  const [isCoping, setIsCoping] = useState(false);

  const handleCopyProduct = async (
    { productId, shopId, reserveSku },
    successCallback = null,
  ) => {
    try {
      if (isCoping) return;

      setSnackbarAlertProps((prev) => ({
        ...prev,
        open: true,
        autoHideDuration: null,
        severity: 'info',
        content: 'Copying your product, please wait... ',
      }));

      setIsCoping(true);
      await api.shopProduct.copyShopProduct(productId, { shopId, reserveSku });
      setIsCoping(false);

      setSnackbarAlertProps((prev) => ({
        ...prev,
        open: true,
        autoHideDuration: 5000,
        severity: 'success',
        content: 'Copy successfully!',
      }));

      if (successCallback) {
        successCallback();
      }
    } catch (err) {
      setIsCoping(false);
      setSnackbarAlertProps((prev) => ({
        ...prev,
        open: true,
        autoHideDuration: 5000,
        severity: 'error',
        content: err.message,
      }));
    }
  };

  return {
    isCoping,
    handleCopyProduct,
  };
}
