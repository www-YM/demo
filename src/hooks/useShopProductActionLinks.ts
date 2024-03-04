import { ShopTypeValue } from 'enums';

export interface ShopProductActionLinkItem {
  label: string;
  disabled?: boolean;
  hidden?: boolean;
  link?: string;
  action?: () => void;
}

export const useShopProductActionLinks = () => {
  const getShopProductActionLinks = (
    product,
    shopType,
  ): ShopProductActionLinkItem[] => {
    if (product.status !== 'published') return [];

    // 首字母大写
    const transformedShopTypeName = shopType
      ? shopType.replace(/^\S/, (s) => s.toUpperCase())
      : '';

    let links = [
      {
        label: `View in ${transformedShopTypeName}`,
        link: product.platformShopUrl,
      },
      {
        label: `Edit in ${transformedShopTypeName}`,
        link: product.platformAdminUrl,
      },
    ];

    // Etsy Active的产品才能查看，但后台未获取，不知道Etsy 这个产品是否上架，先隐藏
    if (shopType === ShopTypeValue.ETSY) {
      links.splice(0, 1);
    }

    return links.filter((item) => !!item.link);
  };

  return {
    getShopProductActionLinks,
  };
};
