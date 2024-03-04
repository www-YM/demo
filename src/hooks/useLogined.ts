import { useEffect, useState } from 'react';
import { getShopMeta } from 'utils/local-storage-manager';

export default function useLogined() {
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    const shop = getShopMeta();
    if (shop) {
      setLogined(true);
    }
  }, [logined]);

  return {
    logined,
    setLogined,
  };
}
