import { useRouter } from 'next/router';
import { useCallback, useContext } from 'react';
import { IntlShape } from 'react-intl';
import { HasDisplayCustomizerContext } from './useHasDisplayCustomizerContext';

const useShowConfirmBeforeLeaveCustomizer = (intl: IntlShape) => {
  const router = useRouter();
  const { hasDisplayedCustomizer } = useContext(HasDisplayCustomizerContext);

  const showConfirmBeforeLeaveCustomizer = useCallback(() => {
    router.beforePopState(({ url, as, options }) => {
      if (!hasDisplayedCustomizer) return true;

      const tip = intl.formatMessage({
        defaultMessage: "If you leave, your designs won't be saved.",
        description: "If you leave, your designs won't be saved.",
      });
      return window.confirm(tip);
    });
  }, [hasDisplayedCustomizer, router, intl]);

  return {
    showConfirmBeforeLeaveCustomizer,
  };
};

export default useShowConfirmBeforeLeaveCustomizer;
