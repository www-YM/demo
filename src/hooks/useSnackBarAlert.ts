import { useState } from 'react';
import { SnackbarAlertState } from 'components/SnackbarAlert';
import { apiErrorMsg } from 'utils/helpers';

export default function useSnackBarAlert() {
  const [snackbarAlertProps, setSnackbarAlertProps] =
    useState<SnackbarAlertState>({
      open: false,
      severity: 'success',
      autoHideDuration: 5000,
      content: '',
      onClose: () => {
        setSnackbarAlertProps((prev) => ({ ...prev, open: false }));
      },
    });

  const apiErrorAlert = (err: Error, options?: { autoHideDuration: 5000 }) =>
    setSnackbarAlertProps((prev) => ({
      ...prev,
      open: true,
      severity: 'error',
      content: apiErrorMsg(err),
      ...options,
    }));

  const successAlert = (content = 'Success') =>
    setSnackbarAlertProps((prev) => ({
      ...prev,
      open: true,
      severity: 'success',
      content,
    }));

  return {
    snackbarAlertProps,
    setSnackbarAlertProps,
    apiErrorAlert,
    successAlert,
  };
}
