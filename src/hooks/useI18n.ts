import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import English from '../../content/compiled-locales/en.json';
import Chinese from '../../content/compiled-locales/zh.json';

enum LocaleFullName {
  EN = 'en-US',
  ZH = 'zh-CN',
}

enum LocaleName {
  EN = 'en',
  ZH = 'zh',
}

const useI18n = () => {
  const router = useRouter();
  const { locale } = router;
  const [currentLocale] = locale ? locale.split('-') : [LocaleName.EN];

  const messages = useMemo(() => {
    switch (currentLocale) {
      case LocaleName.ZH:
        return Chinese;
      case LocaleName.EN:
        return English;
      default:
        return English;
    }
  }, [currentLocale]);

  const onError = useCallback(() => {
    return null;
  }, []);

  const supportedLanguages = useMemo(() => {
    return [
      {
        name: 'English',
        locale: LocaleName.EN,
        fullLocale: LocaleFullName.EN,
      },
      {
        name: '中文',
        locale: LocaleName.ZH,
        fullLocale: LocaleFullName.ZH,
      },
    ];
  }, []);

  const changeLanguage = useCallback(
    (nextLocale: LocaleFullName) => {
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: nextLocale });
    },
    [router],
  );
  return {
    defaultLocale: LocaleName.EN,
    currentLocale,
    messages,
    supportedLanguages,
    onError,
    changeLanguage,
  };
};

export default useI18n;
