import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

interface BaseDialogProps {
  visible: boolean;
  title?: string | JSX.Element;
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullScreen?: boolean;
  ContentComponent: any;
  ActionComponent?: any;
  onClose?: () => void;
}

export default function BaseDialog({
  visible,
  title = '',
  ContentComponent,
  ActionComponent = null,
  maxWidth = 'md',
  fullScreen,
  onClose,
}: BaseDialogProps) {
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={visible}
        onClose={onClose}
        fullWidth
        maxWidth={maxWidth}
      >
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>{ContentComponent}</DialogContent>

        <DialogActions>{ActionComponent}</DialogActions>
      </Dialog>
    </div>
  );
}
