export const accountShippingRules = {
  data: {
    shippingMethods: [
      { id: 1, name: 'Fast delivery' },
      { id: 2, name: 'Test' },
      { id: 3, name: 'Standard delivery' },
    ],
    shippingRules: [
      {
        id: 1,
        name: 'the shipping rule name',
        priority: 100,
        active: true,
        conditions: [
          {
            type: 'shops',
            value: {
              shops: ['InkPOD', 'Etsy'],
            },
          },
          {
            type: 'countries',
            value: {
              countries: ['US', 'AU'],
            },
          },
          {
            type: 'shipping_method_names_in_store',
            value: {
              shippingMethodNames: ['Fast delivery', 'Expedited'],
            },
          },
          {
            type: 'weight_base',
            value: {
              minWeight: 0,
              maxWeight: 1000,
            },
          },
        ],
        action: {
          type: 'multiple_shipping_methods',
          value: {
            shippingMethods: [
              { id: 1, name: 'Fast delivery' },
              { id: 2, name: 'Test' },
            ],
          },
        },
      },
    ],
  },
};
