import { useContext } from 'react';
import { SnackBarAlertContext } from './useSnackBarAlertContext';

export const useTryCatch = () => {
  const { setSnackbarAlertProps } = useContext(SnackBarAlertContext);
  return {
    tryCatchWithErrorHandler: async (tryFn, catchFn = null) => {
      try {
        await tryFn();
      } catch (error) {
        setSnackbarAlertProps((prev) => ({
          ...prev,
          open: true,
          severity: 'error',
          content: error.message,
        }));
        if (catchFn) {
          catchFn();
        }
      }
    },
  };
};
