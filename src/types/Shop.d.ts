type PlatformType = 'native' | 'shopify' | 'etsy';

interface ShopListItem {
  id: string;
  name: string;
  type: PlatformType;
  status: 'active' | 'error';
  typeLogo: string;
  token: string;
  abilities: {
    canPublishCustomProducts: boolean;
    canPublishProducts: boolean;
    canAccessOldVersion: boolean;
    canAutoProcessing: boolean;
  };
}

interface CreateCustomShopParams {
  type: string;
  name: string;
}

type ShopDetail = ShopListItem & {
  currency: string;
  currencyExchangeRate: { value: number; divisor: number };
  notifications: {
    type: string;
    body: string;
  }[];
};
