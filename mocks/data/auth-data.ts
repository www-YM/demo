export const wowTokenData =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2F1dGhcL2lua3BvZCIsImlhdCI6MTYyOTc0NTQ1OCwiZXhwIjoxNjMyMzM3NDU4LCJuYmYiOjE2Mjk3NDU0NTgsImp0aSI6InJjM28xQnBUd2QwV0s4SFYiLCJzdWIiOjQ0MjgsInBydiI6IjliNDZhZmJkNzQyOWFlZDkxNDg5ZTlkYjg4ZDYwZTUzMjgxNGNlOTkifQ.sMsJBhKB1VliIqWhnNTY798VnPjjOa9jZtxMx0IwVTI';

export const tokenData =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkB3b3dmdWxmaWxsbWVudC5jb20iLCJzdWIiOjQ0MjgsImp3dFRva2VuIjoiIiwiaWF0IjoxNjI5NzQ1NDU4LCJleHAiOjE2MzIzMzc0NTh9.10c7cbwIFnTbvF-IrlsKmjEOLwUAGXlGfJAoYBEbxqg';

export const loginWithDefaultShopSuccess = {
  id: 4428,
  wowToken: wowTokenData,
  domain: '',
  platformDomain: '',
  email: 'default@inkpodfulfillment.com',
  phone: '',
  planName: '',
  installedAt: '2021-08-17T11:15:05.000Z',
  token: tokenData,
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
};

export const loginWithShopifyShopSuccess = {
  id: 4428,
  wowToken: wowTokenData,
  domain: '',
  platformDomain: '',
  email: 'dev@inkpodfulfillment.com',
  phone: '',
  planName: '',
  installedAt: '2021-08-17T11:15:05.000Z',
  token: tokenData,
  currency: 'HKD',
  currencyExchangeRate: {
    value: 779,
    divisor: 100,
  },
  moneyWithCurrencyFormat: 'HKD {amount}',
  shopAbilities: {
    canPublishCustomProducts: true,
    canPublishProducts: true,
    canAccessOldVersion: true,
  },
};

export const loginFailure = {
  statusCode: 401,
  message: 'Oops, your email or password is incorrect.',
};

export const registerSuccess = {
  data: 'success',
};

export const sendResetEmailSuccess = {
  data: 'success',
};

export const sendResetEmailFailure = {
  statusCode: 400,
  message: 'This email is not recognized by InkPOD',
};

export const resetPasswordSuccess = {
  data: 'success',
};

export const resetPasswordFailure = {
  statusCode: 400,
  message: 'This email is not recognized by InkPOD',
};

export const confirmRegistrationSuccess = {
  data: 'success',
};

export const confirmRegistrationFailure = {
  statusCode: 406,
  message: 'The email confirmation link is invalid.',
};

export const getProfileFromWowSuccess = {
  id: 1,
  token: tokenData,
  domain: 'wowfootwear.myshopify.com',
  platformDomain: 'wowfootwear.myshopify.com',
  email: 'dev@inkpodfulfillment.com',
  phone: '8613506069336',
  planName: 'affiliate',
  installedAt: '2019-11-24',
  shopCreatedAt: '2019-10-31',
  wowToken: wowTokenData,
  currency: 'HKD',
  currencyExchangeRate: {
    value: 779,
    divisor: 100,
  },
  moneyWithCurrencyFormat: 'HKD {amount}',
  shopAbilities: {
    canPublishProducts: true,
    canPublishCustomProducts: true,
    canAccessOldVersion: true,
  },
};

export const getProfileFromWowFailure = {
  statusCode: 400,
  message: 'Bad request',
};
