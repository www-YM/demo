export const sampleCartData = {
  data: {
    totalCost: 3699,
    items: [
      {
        id: 2834,
        shopProductVariantId: 550911,
        image:
          'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/WsyxCRDYCIHxsiuoUtTUgLXwLdIVforC.jpeg',
        sku: '43506HTA202108301',
        title: 'Branding HTA Custom Hangtag',
        quantity: 1,
        cost: 100,
        options: [{ name: 'Size', value: 'One Size' }],
      },
      {
        id: 2735,
        shopProductVariantId: 518480,
        image:
          'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/ZlokrlstAPKnImCdcDMvIvEkabNZeQqy.jpeg',
        sku: '39594D18202107162',
        title: 'D18 Kids Mesh Knit Sneaker - White',
        quantity: 1,
        cost: 3599,
        options: [{ name: 'Size', value: 'US 11Child / EU29' }],
      },
    ],
  },
};

export const sampleCartShippingCarrierOptions = {
  data: [
    {
      id: 0,
      name: 'Default',
      desc: 'The default shipping method of your products.',
      deliveryTime: '19-27',
      shippingZones: [{ regions: ['AO'], cost: 0 }],
      details: [
        {
          shippingMethod: 'Standard Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/ZlokrlstAPKnImCdcDMvIvEkabNZeQqy.jpeg',
          shopProductVariantId: 518480,
          title: 'D18 Kids Mesh Knit Sneaker - White',
          sku: '39594D18202107162',
          quantity: 1,
          perCost: 0,
        },
        {
          shippingMethod: 'Standard Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/WsyxCRDYCIHxsiuoUtTUgLXwLdIVforC.jpeg',
          shopProductVariantId: 550911,
          title: 'Branding HTA Custom Hangtag',
          sku: '43506HTA202108301',
          quantity: 1,
          perCost: 0,
        },
      ],
    },
    {
      id: 1,
      name: 'Standard Delivery',
      desc: '',
      deliveryTime: '19-27',
      shippingZones: [{ regions: ['WORLDWIDE'], cost: 0 }],
      details: [
        {
          shippingMethod: 'Standard Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/ZlokrlstAPKnImCdcDMvIvEkabNZeQqy.jpeg',
          shopProductVariantId: 518480,
          title: 'D18 Kids Mesh Knit Sneaker - White',
          sku: '39594D18202107162',
          quantity: 1,
          perCost: 0,
        },
        {
          shippingMethod: 'Standard Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/WsyxCRDYCIHxsiuoUtTUgLXwLdIVforC.jpeg',
          shopProductVariantId: 550911,
          title: 'Branding HTA Custom Hangtag',
          sku: '43506HTA202108301',
          quantity: 1,
          perCost: 0,
        },
      ],
    },
    {
      id: 2,
      name: 'Fast Delivery',
      desc: 'Deliveried by FedEx',
      deliveryTime: '4-10',
      shippingZones: [{ regions: ['WORLDWIDE'], cost: 2100 }],
      details: [
        {
          shippingMethod: 'Fast Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/ZlokrlstAPKnImCdcDMvIvEkabNZeQqy.jpeg',
          shopProductVariantId: 518480,
          title: 'D18 Kids Mesh Knit Sneaker - White',
          sku: '39594D18202107162',
          quantity: 1,
          perCost: 2100,
        },
        {
          shippingMethod: 'Fast Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/WsyxCRDYCIHxsiuoUtTUgLXwLdIVforC.jpeg',
          shopProductVariantId: 550911,
          title: 'Branding HTA Custom Hangtag',
          sku: '43506HTA202108301',
          quantity: 1,
          perCost: 0,
        },
      ],
    },
  ],
};
