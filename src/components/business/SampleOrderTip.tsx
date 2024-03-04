import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useChat from 'hooks/useChat';
import ChatIcon from '@material-ui/icons/Chat';

export default function SampleOrderTip({
  className = '',
  onClick,
}: {
  onClick?: () => void;
  className?: string;
}) {
  const { showNewMessage } = useChat();

  const handleClick = () => {
    showNewMessage('Hi, how can I get a discount for sample order.');
    onClick && onClick();
  };

  return (
    <Alert className={className} severity="info">
      <Typography variant="body1">
        Sample Order can gets lower costs, please
        <Button color="primary" onClick={handleClick} endIcon={<ChatIcon />}>
          contact us
        </Button>{' '}
        before checkout.
      </Typography>
    </Alert>
  );
}
