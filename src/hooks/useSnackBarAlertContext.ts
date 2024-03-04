import { SnackbarAlertState } from 'components/SnackbarAlert';
import React, { createContext } from 'react';

type Props = {
  snackbarAlertProps: SnackbarAlertState;
  setSnackbarAlertProps: React.Dispatch<
    React.SetStateAction<SnackbarAlertState>
  >;
  apiErrorAlert: (err: Error, options?: { autoHideDuration: number }) => void;
  successAlert: (msg?: string) => void;
};

export const SnackBarAlertContext = createContext<Props>({
  snackbarAlertProps: null,
  setSnackbarAlertProps: null,
  apiErrorAlert: null,
  successAlert: null,
});
