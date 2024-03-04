import React, { useEffect } from 'react';
import { PlatformTypeValue } from 'enums';
import { useRouter } from 'next/router';

export const useConnectConfirmDynamicRoute = () => {
  const router = useRouter();
  const platformType = (
    router.query.platformType || ''
  ).toString() as PlatformTypeValue;

  const isValid = [PlatformTypeValue.ETSY, PlatformTypeValue.SHOPIFY].includes(
    platformType,
  );

  useEffect(() => {
    if (!platformType) return;

    if (!isValid) {
      router.replace('/404');
    }
  }, [platformType, router]);

  return {
    platformType,
    isValid,
  };
};
