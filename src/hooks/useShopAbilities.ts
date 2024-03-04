export function useShopAbilities(shop) {
  const canPublishProduct = () => {
    return shop?.abilities.canPublishProducts || false;
  };
  const canAccessOldVersion = () => {
    return shop?.abilities.canAccessOldVersion || false;
  };
  return {
    canPublishProduct,
    canAccessOldVersion,
  };
}
