import {
  add,
  convert,
  Dinero,
  dinero,
  subtract,
  toSnapshot,
  transformScale,
} from 'dinero.js';
import * as currencies from '@dinero.js/currencies';

export const currencyTransformer = ({ amount, currency }) =>
  `${currency.code} ${amount.toFixed(2)}`;

export const toDineroObj = (
  amount: number,
  currencyCode: string,
): Dinero<number> => {
  return dinero({ amount, currency: currencies[currencyCode] });
};

export const calRetailPriceExchanged = (
  cost: number,
  profitExchanged: number,
  currencyCode: string,
  currencyExchangeRateValue: number,
  currencyExchangeRateDivisor: number,
) => {
  const costDinerObj = convertCurrency(
    cost,
    currencyCode,
    currencyExchangeRateValue,
    currencyExchangeRateDivisor,
  );

  return toSnapshot(
    transformScale(
      add(costDinerObj, toDineroObj(profitExchanged, currencyCode)),
      2,
    ),
  ).amount;
};

/**
 * 为金额进行换汇
 * @param amount 金额
 * @param currencyCode 目标币种
 * @param exchangeRateValue 汇率*100
 * @param exchangeRateDivisor 100
 * @returns Dinero<number>
 */
export const convertCurrency = (
  amount: number,
  currencyCode: string,
  exchangeRateValue: number,
  exchangeRateDivisor: number,
  scale?: number,
): Dinero<number> => {
  const rates = {
    [currencyCode]: {
      amount: exchangeRateValue,
      scale: Math.log10(exchangeRateDivisor),
    },
  };

  let d = dinero({
    amount,
    currency: currencies[process.env.NEXT_PUBLIC_DEFAULT_CURRENCY_CODE],
  });

  if (currencyCode !== process.env.NEXT_PUBLIC_DEFAULT_CURRENCY_CODE) {
    d = convert(d, currencies[currencyCode], rates);
  }

  return scale ? transformScale(d, scale) : d;
};

export const calProfitExchanged = (
  salePriceExchanged: number,
  costWithDefaultCurrency: number,
  currencyCode: string,
  currencyExchangeRateValue: number,
  currencyExchangeRateDivisor: number,
): Dinero<number> => {
  const costD = dinero({
    amount: costWithDefaultCurrency,
    currency: currencies[process.env.NEXT_PUBLIC_DEFAULT_CURRENCY_CODE],
  });

  const rates = {
    [currencyCode]: {
      amount: currencyExchangeRateValue,
      scale: Math.log10(currencyExchangeRateDivisor),
    },
  };

  const costExchanged = convert(costD, currencies[currencyCode], rates);

  const retailPriceExchanged = dinero({
    amount: salePriceExchanged,
    currency: currencies[currencyCode],
  });

  return subtract(retailPriceExchanged, costExchanged);
};

export const profitExchangedToProfit = (
  profitExchanged: number,
  currencyCode: string,
  currencyExchangeRateValue: number,
  currencyExchangeRateDivisor: number,
): number => {
  const rates = {
    [currencyCode]: {
      amount: currencyExchangeRateValue,
      scale: Math.log10(currencyExchangeRateDivisor),
    },
    USD: {
      amount: 1,
      scale: 1,
    },
  };

  const profitExchangedDinero = toDineroObj(profitExchanged, currencyCode);

  const profitDinero = convert(
    profitExchangedDinero,
    currencies[process.env.NEXT_PUBLIC_DEFAULT_CURRENCY_CODE],
    rates,
  );

  const profit = toSnapshot(profitDinero).amount;

  return profit;
};
