interface MyProductStatus {
  label: MessageDescriptor;
  value: string;
  desc: string;
  searchable: boolean;
}

interface CollectionLineItem {
  id: number;
  title: string;
}

interface MyProductsListItem {
  id: string;
  shopId: number;
  title: string;
  status: string;
  createdAt: string;
  currency: string;
  platformShopUrl: string;
  platformAdminUrl: string;
  shippingMethod: string;
  product: {
    id: string;
    title: string;
    slug: string;
    type: ProductType;
    category: ProductCategory;
  };
  image: string;
  hasDiscontinuedVariants: boolean;
  hasIncompleteVariants: boolean;
  customizable: boolean;
}

interface ShippingCarrier {
  id: number;
  name: string;
  desc: string;
  isDefault: boolean;
  deliveryTime: string;
  shippingZones: { regions: string[]; cost: number }[];
}

interface MyProductDetail {
  id: string;
  title: string;
  status: string;
  image: string;
  desc: string;
  textDesc: string;
  errorMessage: string;
  collections: number[];
  tags: string[];
  recommendTags: string[];
  platformShopUrl: string;
  platformAdminUrl: string;
  createdAt: string;
  currency: string;
  profit: number;
  currencyExchangeRateValue: number;
  currencyExchangeRateDivisor: number;
  isShippingAddToRetailPrice: boolean;
  images: { id: number; url: string; position: number }[];
  designId: string;
  product: {
    id: string;
    title: string;
    slug: string;
    type: ProductType;
    category: ProductCategory;
  };
  options: {
    id: number;
    name: string;
    values: string[];
  }[];
  variants: {
    id: string;
    sku: string;
    cost: number;
    retailPrice: number;
    retailPriceExchanged: number;
    recommendRetailPrice: number;
    image: string;
    options: {
      id: number;
      name: string;
      value: string;
    }[];
  }[];
}
type MyProductDetailVariant = MyProductDetail['variants'][0];

type PublishDataShippingCarrier = ShippingCarrier;

type PublishData = {
  id: string;
  title: string;
  originTitle: string;
  desc: string;
  textDesc?: string;
  tags: product.tags;
  recommendTags: product.recommendTags;
  profit: number;
  options: {
    name: string;
    values: string[];
  }[];
  variants: {
    id: string;
    image: string;
    cost: number;
    retailPrice: number;
    retailPriceExchanged: number;
    options: {
      name: string;
      value: string;
    }[];
  }[];
  // shippingCarriers: PublishDataShippingCarrier[];
  recommendedProfit: number;
  isShippingAddToRetailPrice: boolean;
};

type PublishDataVariantsTableData = {
  options: {
    name: string;
    values: string[];
  }[];
  variants: {
    id: string;
    image: string;
    cost: number;
    profit: number;
    profitExchanged: number;
    retailPrice: number;
    retailPriceExchanged: number;
    options: {
      name: string;
      value: string;
    }[];
  }[];
};

type PublishDialogForm = PublishReqBaseInfo &
  PublishReqPriceInfo &
  PublishReqPriceOtherInfo &
  PublishReqMockupInfo;

type PublishReqMockupInfo = {
  isUploadSizeChartImage?: boolean;
  shopProductImageIds: number[];
};

type PublishReqBaseInfo = {
  collections: number[];
  tags: string[];
  desc: string;
  title: string;
};

type PublishReqPriceInfo = {
  isShippingAddToRetailPrice: boolean;
  profit: number;
  profitExchanged: number;
};

type PublishReqPriceOtherInfo = {
  currency: string;
  exchangeRateValue: number;
  exchangeRateDivisor: number;
  variants: {
    id: string;
    retailPrice: number;
    retailPriceExchanged: number;
  }[];
};

type IncompleteVariant = {
  productVariantId: number;
  image: string;
  cost: number;
  recommendRetailPrice: number;
  options: { name: string; value: string }[];
};

type DiscontinuedVariant = {
  id: string;
  productVariantId: number;
  image: string;
  cost: number;
  retailPriceExchanged: number;
  options: [
    {
      name: string;
      value: string;
    },
  ];
};
