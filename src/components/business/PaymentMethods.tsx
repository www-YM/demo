import { Card, CardContent, Typography } from '@material-ui/core';
import api from 'api';
import React from 'react';
import useSWR from 'swr';
import PaymentMethodGroup from 'views/Settings/components/SettingPayments/PaymentMethodGroup';
import LoadingSection from './LoadingSection';

type Props = {
  noOuter?: boolean;
  onSelect: (paymentMethodId: string) => void;
};

const Content = ({ onSelect }): JSX.Element => {
  const { data: paymentMethods, mutate } = useSWR(
    api.paymentMethod.getPaymentMethodsUrl,
    () => api.paymentMethod.getPaymentMethods(),
  );

  const handleOnAddedCreditCard = () => {
    mutate();
  };

  if (!paymentMethods) {
    return <LoadingSection></LoadingSection>;
  }

  return (
    <PaymentMethodGroup
      paymentMethods={paymentMethods}
      onUpdate={handleOnAddedCreditCard}
      onSelect={onSelect}
      selectable
      removeable={false}
    ></PaymentMethodGroup>
  );
};

export default function PaymentMethods({
  noOuter,
  onSelect,
}: Props): JSX.Element {
  if (noOuter) {
    return <Content onSelect={onSelect}></Content>;
  }

  return (
    <Card>
      <CardContent>
        <Typography component="p" variant="h5" gutterBottom>
          Payment method
        </Typography>
        <Content onSelect={onSelect}></Content>
      </CardContent>
    </Card>
  );
}
