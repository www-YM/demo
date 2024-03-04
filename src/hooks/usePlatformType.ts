export const usePlatformType = () => {
  const platforms = [
    { label: 'InkPOD', value: 'native' },
    { label: 'Shopify', value: 'shopify' },
    { label: 'Etsy', value: 'etsy' },
  ];
  const platformName = (platformType: PlatformType) => {
    const platform = platforms.find(({ value }) => value === platformType);

    return platform.label;
  };

  return { platformName, platforms };
};
