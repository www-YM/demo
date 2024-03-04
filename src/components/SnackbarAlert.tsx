import { Snackbar } from '@material-ui/core';
import { Alert, Color } from '@material-ui/lab';
import { injectIntl, IntlShape, MessageDescriptor } from 'react-intl';

type SnackbarProps = {
  open: boolean;
  onClose?: () => void;
  autoHideDuration: number;
};

type AlertProps = {
  onClose?: () => void;
  severity: Color;
  content: string | MessageDescriptor;
};

export type SnackbarAlertProps = SnackbarProps &
  AlertProps & { intl: IntlShape };

export type SnackbarAlertState = SnackbarProps & AlertProps;

export const SnackbarAlert = injectIntl(
  ({
    open,
    onClose,
    autoHideDuration,
    severity,
    content,
    intl,
  }: SnackbarAlertProps): JSX.Element => {
    return (
      <>
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={onClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={onClose} severity={severity} variant="filled">
            {typeof content === 'string'
              ? content
              : intl.formatMessage(content)}
          </Alert>
        </Snackbar>
      </>
    );
  },
);
