import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import React, { useEffect, useState } from 'react';
import { currencyTransformer, toDineroObj } from 'utils/MoneyUtil';
import { toFormat, Dinero } from 'dinero.js';

type MoneyProps = {
  amount: number | Dinero<number>;
  variant?: Variant;
  component?: React.ElementType;
  freeString?: boolean;
  className?: string;
  fontWeight?: 'inherit' | 'bold';
};

export default function Money({
  amount,
  freeString,
  variant,
  component,
  fontWeight = 'inherit',
  ...rest
}: MoneyProps): JSX.Element {
  const [money, setMoney] = useState('');

  useEffect(() => {
    const d: Dinero<number> =
      typeof amount === 'number'
        ? toDineroObj(amount, process.env.NEXT_PUBLIC_DEFAULT_CURRENCY_CODE)
        : amount;

    setMoney(toFormat(d, currencyTransformer));
  }, [amount]);

  return (
    <Typography
      variant={variant || 'inherit'}
      component={component || 'span'}
      style={{ fontWeight }}
      {...rest}
    >
      {amount === 0 && freeString ? (
        <Typography variant="inherit" component="span">
          Free
        </Typography>
      ) : (
        money
      )}
    </Typography>
  );
}
