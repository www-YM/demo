export const settings = {
  data: {
    imageRegions: [
      { name: 'Australia', value: 'au' },
      { name: 'China', value: 'cn' },
      { name: 'Europe', value: 'eur' },
      { name: 'Singapore', value: 'sg' },
      { name: 'The United States', value: 'us' },
    ],
    imageRegion: 'us',
    autoProcessing: {
      isAutoProcessing: false,
      autoProcessingDelay: 0,
    },
    creditCard: null,
  },
};

export const updateSettings = {
  data: 'success',
};

export const getShopSetting = (id) => {
  const shopSettingMap = {
    1: {
      shopId: 1,
      name: 'Shopify store',
      website: 'https://shopify.myshopify.com/',
      isAutoProcessing: true,
      autoProcessingDelay: 1,
    },
    2: {
      shopId: 2,
      name: 'InkPOD store',
      website: 'https://inkpod.myshopify.com/',
      isAutoProcessing: false,
      autoProcessingDelay: 2,
    },
  };

  return {
    data: shopSettingMap[id],
  };
};
