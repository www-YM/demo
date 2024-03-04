import { getRandomInt } from 'utils/helpers';
import { ShopTypeValue } from 'enums';

export const shops = {
  data: [
    {
      id: 3,
      name: 'Etsy store',
      type: ShopTypeValue.ETSY,
      status: 'active',
      typeLogo:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/etsy-logo.svg',
      abilities: {
        canPublishCustomProducts: true,
        canPublishProducts: true,
        canAccessOldVersion: true,
        canAutoProcessing: true,
      },
    },
    {
      id: 1,
      name: 'Shopify store',
      type: ShopTypeValue.SHOPIFY,
      status: 'active',
      typeLogo:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/shopify-logo.svg',
      abilities: {
        canPublishCustomProducts: true,
        canPublishProducts: true,
        canAccessOldVersion: true,
        canAutoProcessing: true,
      },
    },
    {
      id: 2,
      name: 'InkPOD store',
      type: ShopTypeValue.NATIVE,
      status: 'active',
      typeLogo:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/inkpod-logo.svg',
      abilities: {
        canPublishCustomProducts: true,
        canPublishProducts: true,
        canAccessOldVersion: true,
        canAutoProcessing: false,
      },
    },
  ],
  meta: { currentPage: 1, lastPage: 1, perPage: 10, total: 2 },
};

export const createdShopData = (name) => {
  return {
    data: {
      // id使用随机数，避免渲染时key重复
      id: getRandomInt(1000),
      name,
      type: ShopTypeValue.NATIVE,
      status: 'active',
      typeLogo:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/inkpod-logo.svg',
    },
  };
};

export const getShopDetail = (id) => {
  const shopList = [
    {
      id: 3,
      name: 'Etsy store',
      type: ShopTypeValue.ETSY,
      status: 'active',
      typeLogo:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/etsy-logo.svg',
      abilities: {
        canPublishCustomProducts: false,
        canPublishProducts: true,
        canAccessOldVersion: false,
      },
      notifications: [
        {
          type: 'default',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
        {
          type: 'warning',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
        {
          type: 'error',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
      ],
    },
    {
      id: 1,
      name: 'Shopify store',
      type: ShopTypeValue.SHOPIFY,
      status: 'active',
      typeLogo:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/shopify-logo.svg',
      abilities: {
        canPublishCustomProducts: false,
        canPublishProducts: true,
        canAccessOldVersion: false,
      },
      notifications: [
        {
          type: 'default',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
        {
          type: 'warning',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
        {
          type: 'error',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
      ],
    },
    {
      id: 2,
      name: 'InkPOD store',
      type: ShopTypeValue.NATIVE,
      status: 'active',
      typeLogo:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/inkpod-logo.svg',
      abilities: {
        canPublishCustomProducts: false,
        canPublishProducts: false,
        canAccessOldVersion: false,
      },
      notifications: [
        {
          type: 'default',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
        {
          type: 'warning',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
        {
          type: 'error',
          body: '<div class="col-xs-12 col-sm-8"> <h6 class="alert-header" style="color: inherit"> Let your customers create personalized designs </h6> <p> To use the product personalization tool, you need to give Printful access via your Shopify dashboard.  </p> </div>',
        },
      ],
    },
  ];
  return {
    data: shopList.find((i) => i.id.toString() === id.toString()),
  };
};
