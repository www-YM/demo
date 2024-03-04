import { shops } from './shops-data';

// 指定测试店铺的ID
const SHOP_ID = shops.data[0].id;

export const shopProducts = {
  data: [
    {
      id: 39149,
      shopId: SHOP_ID,
      title:
        'Stars of Creation by Denise Dundon Low-Top Leather Sneakers by Shoe Zero',
      status: 'published',
      platformShopUrl:
        'https://shoezero.com/products/stars-of-creation-by-denise-dundon-low-top-leather-sneakers-by-shoe-zero',
      platformAdminUrl: 'https://shoezero.com/admin/products/6962452725931',
      product: {
        id: 123,
        title: 'D27 Low-Top Leather Sneakers - White',
        slug: 'low-top-leather-sneakers-white-d27',
        category: {
          descendant: {
            id: 6,
            breadcrumb: 'Low-Top Shoes',
            slug: 'low-top-shoes',
          },
          children: { id: 2, breadcrumb: 'All Shoes', slug: 'all-shoes' },
          parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
        },
      },
      shippingMethod: 'Fast Delivery',
      image:
        'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
    },
  ],
  meta: { currentPage: 1, lastPage: 4, perPage: 10, total: 1 },
};

export const shopProductDetail = {
  data: {
    id: 39149,
    currency: 'HKD',
    exchangeRateValue: 779,
    exchangeRateDivisor: 100,
    profit: 1600,
    platformShopUrl:
      'https://shoezero.com/products/stars-of-creation-by-denise-dundon-low-top-leather-sneakers-by-shoe-zero',
    platformAdminUrl: 'https://shoezero.com/admin/products/6962452725931',
    productId: 123,
    createdAt: '2021-08-24',
    title:
      'Stars of Creation by Denise Dundon Low-Top Leather Sneakers by Shoe Zero',
    collections: [246246441131],
    productType: 'sneakers',
    shippingCarrierId: 2,
    tags: ['sneakers', 'leather sneakers'],
    recommendTags: ['sneakers', 'leather sneakers'],
    desc: '<ul><li>Soft rubble soles for all over printing low top leather shoes</li><li>Leather upper, mesh cloth lining and EVA padded insoles</li><li>Complete with eyelets and a lace up closure for a classic look</li><li>Perfect for every season, wear them all year round</li></ul><p><img src="https://assets-us.wowfulfillment.com/desc/d27-size-chart-0330.jpg" alt="SizeChart" width="500"></p>',
    image:
      'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
    shopId: 1,
    status: 'unpublished',
    errorMessage: '',
    isImported: 0,
    inStock: true,
    designId: 34212,
    images: [
      {
        id: 338122,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        position: 1,
      },
      {
        id: 338123,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/dfDGzOKVwNnyAjxMbojnYKDZxZitfKsj.jpeg',
        position: 2,
      },
      {
        id: 338124,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/xpzzDQYnPCPIxFSqTdbcUrMPibmmnUgG.jpeg',
        position: 3,
      },
      {
        id: 338125,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/ActGBpoZmPGkMsgLTtnNjuZUzwlYiWHx.jpeg',
        position: 4,
      },
      {
        id: 338126,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/wragRcDlLORuyJoRLsOdNRvrzLuJcBnv.jpeg',
        position: 5,
      },
      {
        id: 338127,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/ChhIsGFyBIVKKzSFLKxGYblVwXUoAPYH.jpeg',
        position: 6,
      },
      {
        id: 338128,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/WSQCPpCqPJtGlWTFsMoqSisOziTjUHbn.jpeg',
        position: 7,
      },
      {
        id: 338129,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/xKucluUdrDgNIVeevIsOLNXGVwwEiufi.jpeg',
        position: 8,
      },
      {
        id: 338130,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/HyzHqdvjGHPURKmQvWPeDhtUvGRfZIUN.jpeg',
        position: 9,
      },
      {
        id: 338131,
        url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/hnZaXAYZwJddNXmSeGKNQAKvJbLovqpc.jpeg',
        position: 10,
      },
    ],
    product: {
      id: 123,
      title: 'D27 Low-Top Leather Sneakers - White',
      slug: 'low-top-leather-sneakers-white-d27',
      category: {
        descendant: {
          id: 6,
          breadcrumb: 'Low-Top Shoes',
          slug: 'low-top-shoes',
        },
        children: { id: 2, breadcrumb: 'All Shoes', slug: 'all-shoes' },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
    },
    options: [
      {
        name: 'Size',
        values: [
          'Men US5 / EU38',
          'Men US6 / EU39',
          'Men US7 / EU40',
          'Men US7.5 / EU41',
          'Men US8.5 / EU42',
          'Men US9.5 / EU43',
          'Men US10 / EU44',
          'Men US11 / EU45',
          'Men US12 / EU46',
          'Men US13 / EU47',
          'Men US14 / EU48',
          'Women US5 / EU35',
          'Women EU5.5 / EU36',
          'Women US6 / EU37',
          'Women US7 / EU38',
          'Women US8 / EU39',
          'Women US9 / EU40',
          'Women US10 / EU41',
          'Women US11 / EU42',
          'Women US11.5 / EU43',
          'Women US12 / EU44',
        ],
      },
    ],
    variants: [
      {
        id: 513453,
        sku: '39149d272020081901',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US5 / EU38' }],
      },
      {
        id: 513454,
        sku: '39149d272020081902',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US6 / EU39' }],
      },
      {
        id: 513455,
        sku: '39149d272020081903',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US7 / EU40' }],
      },
      {
        id: 513456,
        sku: '39149d272020081904',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US7.5 / EU41' }],
      },
      {
        id: 513457,
        sku: '39149d272020081905',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US8.5 / EU42' }],
      },
      {
        id: 513458,
        sku: '39149d272020081906',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US9.5 / EU43' }],
      },
      {
        id: 513459,
        sku: '39149d272020081907',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US10 / EU44' }],
      },
      {
        id: 513460,
        sku: '39149d272020081908',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US11 / EU45' }],
      },
      {
        id: 513461,
        sku: '39149d272020081909',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US12 / EU46' }],
      },
      {
        id: 513462,
        sku: '39149d2720200819010',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US13 / EU47' }],
      },
      {
        id: 513463,
        sku: '39149d2720200819011',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Men US14 / EU48' }],
      },
      {
        id: 513464,
        sku: '39149d2720200819012',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US5 / EU35' }],
      },
      {
        id: 513465,
        sku: '39149d2720200819013',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women EU5.5 / EU36' }],
      },
      {
        id: 513466,
        sku: '39149d2720200819014',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US6 / EU37' }],
      },
      {
        id: 513467,
        sku: '39149d2720200819015',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US7 / EU38' }],
      },
      {
        id: 513468,
        sku: '39149d2720200819016',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US8 / EU39' }],
      },
      {
        id: 513469,
        sku: '39149d2720200819017',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US9 / EU40' }],
      },
      {
        id: 513470,
        sku: '39149d2720200819018',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US10 / EU41' }],
      },
      {
        id: 513471,
        sku: '39149d2720200819019',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US11 / EU42' }],
      },
      {
        id: 513472,
        sku: '39149d2720200819020',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US11.5 / EU43' }],
      },
      {
        id: 513473,
        sku: '39149d2720200819021',
        recommendRetailPrice: 4399,
        retailPrice: 4399,
        retailPriceExchanged: 34268,
        compareAtPrice: 7999,
        cost: 2799,
        image:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/persist-mockups/DbYWrbqFCEivqiUFOKROfvzkOUKPvjCf.jpeg',
        options: [{ name: 'Size', value: 'Women US12 / EU44' }],
      },
    ],
    shippingCarrier: {
      id: 2,
      name: 'Fast Delivery',
      desc: 'Deliveried by FedEx',
      isDefault: false,
      deliveryTime: '4-10',
      shippingZones: [
        { regions: ['US'], cost: 1000 },
        { regions: ['EU'], cost: 1100 },
        { regions: ['WORLDWIDE'], cost: 1300 },
      ],
    },
    shippingCarriers: [
      {
        id: 1,
        name: 'Standard Delivery',
        desc: '',
        isDefault: true,
        deliveryTime: '19-27',
        shippingZones: [{ regions: ['WORLDWIDE'], cost: 0 }],
      },
      {
        id: 2,
        name: 'Fast Delivery',
        desc: 'Deliveried by FedEx',
        isDefault: false,
        deliveryTime: '4-10',
        shippingZones: [
          { regions: ['US'], cost: 1000 },
          { regions: ['EU'], cost: 1100 },
          { regions: ['WORLDWIDE'], cost: 1300 },
        ],
      },
    ],
  },
};

export const deleteShopProductSuccess = {
  data: 'success',
};

export const publishShopProductSuccess = {
  data: 'success',
};

export const createPendingProductSuccess = {
  data: 'success',
};

export const updateShopProductShippingMethod = (
  id: number,
  shippingCarrierId: number,
) => {
  shopProductDetail.data.shippingCarrierId = shippingCarrierId;
  shopProductDetail.data.shippingCarrier =
    shopProductDetail.data.shippingCarriers.find(
      (shippingCarrier) => shippingCarrier.id === shippingCarrierId,
    );
  return {
    data: 'success',
  };
};
