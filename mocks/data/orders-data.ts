import { OrderStatusValue } from 'enums';

export const orders = {
  data: [
    {
      id: 'QVLP8qNDO54OEl7j',
      orderNumber: '1044',
      status: 'pending',
      createdAt: '2021-07-02',
      discount: 0,
      shipping: 1400,
      vat: 0,
      cost: 3999,
      shipments: [{ shippingMethod: 'Fast Delivery', cost: 1400 }],
    },
    {
      id: 'dj8DVv4xLe4mKb3A',
      orderNumber: '1043',
      status: 'awaiting_production',
      createdAt: '2021-07-01',
      discount: 0,
      shipping: 0,
      vat: 1000,
      cost: 2199,
      shipments: [{ shippingMethod: 'Standard Delivery', cost: 0 }],
    },
    {
      id: 'gbadJWz0vJ4lkv6o',
      orderNumber: '1041',
      status: 'in_production',
      createdAt: '2021-03-30',
      discount: 0,
      shipping: 0,
      vat: 600,
      cost: 3999,
      shipments: [{ shippingMethod: 'Standard Delivery', cost: 0 }],
    },
    {
      id: '0jaQV3p8V1N79k8m',
      orderNumber: '1040',
      status: 'shipped',
      createdAt: '2021-03-19',
      discount: 0,
      shipping: 0,
      vat: 700,
      cost: 699,
      shipments: [{ shippingMethod: 'Standard Delivery', cost: 0 }],
    },
    {
      id: '86V3k7z3v9NX1MZB',
      orderNumber: '1039',
      status: 'cancelled',
      createdAt: '2021-02-17',
      discount: 0,
      shipping: 0,
      vat: 200,
      cost: 699,
      shipments: [{ shippingMethod: 'Standard Delivery', cost: 0 }],
    },
  ],
  meta: { currentPage: 1, lastPage: 2, perPage: 10, total: 16 },
};

export const getOrderDetail = (id: string) => {
  const status = orders.data.find((order) => order.id === id).status;
  const editable = [
    OrderStatusValue.PENDING,
    OrderStatusValue.AWAITING_PRODUCTION,
  ].includes(status as OrderStatusValue);

  return {
    data: {
      id,
      canEditShippingAddress: editable,
      canChangeShippingMethod: editable,
      orderNumber: '1044',
      platformCreatedAt: '2021-07-02',
      createdAt: '2021-07-02',
      cost: 3999,
      discount: 0,
      vat: 500,
      shipping: 1400,
      status: 'pending',
      fulfillments: [],
      address: {
        id: 751,
        phone: '1100',
        email: 'dev@wowfulfillment.com',
        country: 'China',
        countryCode: 'CN',
        province: 'Hong Kong Island',
        city: 'Kwai Chung',
        zip: '4396',
        address1: 'Flat B07 23/F Hover Ind Bldg No.26-38 Kwai Cheong Rd NT',
        address2: 'china',
        lastName: 'Ivan',
        firstName: 'Lee',
      },
      shippingCarrierId: 0,
      shipments: [
        {
          shippingMethod: 'Fast Delivery',
          cost: 1400,
        },
      ],
      payments: [],
      items: [
        {
          id: 891,
          title: 'D41 Leather Boots',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/AmQFYCFyMbhigBjdxLLbVkXTDoxEvnMv.jpeg',
          shopProductVariantId: 461025,
          isCustomerPodProduct: false,
          sku: '',
          options: [
            {
              name: 'Size',
              value: 'Men US5 / EU38',
            },
          ],
          quantity: 1,
          cost: 3999,
          shipment: {
            shippingMethod: 'Fast Delivery',
          },
        },
      ],
    },
  };
};

export const updateShippingAddressSuccess = {
  data: 'success',
};

export const orderShippingCarrierOptions = {
  data: [
    {
      id: 0,
      name: 'Default',
      desc: 'The default shipping method of your products.',
      deliveryTime: '4-10',
      shippingZones: [{ regions: ['AO'], cost: 2100 }],
      details: [
        {
          shippingMethod: 'Fast Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/mANohSSDGNDLrPnDFSTsHvjChoJoksaI.jpeg',
          shopProductVariantId: 535201,
          title: 'D14 Breathable Mesh Knit Sneaker - Black',
          sku: '41670D14B2021072212',
          quantity: 1,
          perCost: 2100,
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
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/mANohSSDGNDLrPnDFSTsHvjChoJoksaI.jpeg',
          shopProductVariantId: 535201,
          title: 'D14 Breathable Mesh Knit Sneaker - Black',
          sku: '41670D14B2021072212',
          quantity: 1,
          perCost: 0,
        },
      ],
    },
    {
      id: 2,
      name: 'Fast Delivery',
      desc: 'Delivered by FedEx',
      deliveryTime: '4-10',
      shippingZones: [{ regions: ['WORLDWIDE'], cost: 2100 }],
      details: [
        {
          shippingMethod: 'Fast Delivery',
          image:
            'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/persist-mockups/mANohSSDGNDLrPnDFSTsHvjChoJoksaI.jpeg',
          shopProductVariantId: 535201,
          title: 'D14 Breathable Mesh Knit Sneaker - Black',
          sku: '41670D14B2021072212',
          quantity: 1,
          perCost: 2100,
        },
      ],
    },
  ],
};

export const updateShippingMethodSuccess = {
  data: 'success',
};
