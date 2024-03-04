import { wowTokenData } from './auth-data';

export const CONNECT_CONFIRM_FAILED_TOKEN = 'connect-confirm-failed-token';

const SHOP_INFO_TEMPLATE = () => ({
  id: 4428,
  wowToken: wowTokenData,
  domain: '',
  platformDomain: '',
  email: 'default@inkpodfulfillment.com',
  phone: '',
  planName: '',
  installedAt: '2021-08-17T11:15:05.000Z',
  token: 'connect-confirm-success-token',
  currency: 'USD',
  currencyExchangeRate: {
    value: 100,
    divisor: 100,
  },
  moneyWithCurrencyFormat: 'USD${amount}',
  shopAbilities: {
    canPublishCustomProducts: false,
    canPublishProducts: false,
    canAccessOldVersion: false,
  },
});

export const accounts = [
  {
    type: 'default',
    email: 'default@test.com',
    password: 'password',
    data: () => {
      const info = SHOP_INFO_TEMPLATE();
      info.token = 'default-token';
      return info;
    },
  },
  {
    type: 'connect-confirm-success',
    email: 'connect-confirm-success@test.com',
    password: 'password',
    data: () => {
      const info = SHOP_INFO_TEMPLATE();
      info.token = 'connect-confirm-success-token';
      return info;
    },
  },
  {
    type: 'connect-confirm-failed',
    email: 'connect-confirm-failed@test.com',
    password: 'password',
    data: () => {
      const info = SHOP_INFO_TEMPLATE();
      info.token = 'connect-confirm-failed-token';
      return info;
    },
  },
];
