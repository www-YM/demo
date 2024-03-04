import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/stripe-style.css';
import 'assets/css/index.css';
import 'swiper/css/swiper.min.css';
import 'nprogress/nprogress.css';
import dynamic from 'next/dynamic';
import { IntercomProvider } from 'react-use-intercom';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import useI18n from 'hooks/useI18n';
import { HasDisplayCustomizerContext } from 'hooks/useHasDisplayCustomizerContext';
// import * as Sentry from '@sentry/nextjs';

if (process.env.NEXT_PUBLIC_MOCK_SERVICE_WORKER_ENABLED) {
  require('../mocks');
}

const TopProgressBar = dynamic(() => import('components/TopProgressBar'), {
  ssr: false,
});

declare global {
  interface Window {
    // Stripe: any;
    collectEvent: any;
    Intercom: any;
    designer: any;
    canvas: any;
    _test: any;
    gtag: any;
    _wow: {
      customizer: {
        debug: boolean;
      };
    };
  }
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    isSnakeCaseKeys?: boolean;
    isCamelCaseKeys?: boolean;
    isClearEmpties?: boolean;
  }
}

interface AppProps {
  Component: any;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  const { currentLocale, messages, onError, defaultLocale } = useI18n();

  const [hasDisplayedCustomizer, setHasDisplayedCustomizer] = useState(false);
  const defaultValue = {
    hasDisplayedCustomizer,
    setHasDisplayedCustomizer,
  };

  useEffect(() => {
    // const handleRouteChange = (url) => {
    //   ga.pageview(url);
    // };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    // router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeComplete', () => window.scrollTo(0, 0));

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      // router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <IntlProvider
      messages={messages}
      onError={onError}
      locale={currentLocale}
      defaultLocale={defaultLocale}
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <TopProgressBar />
      <IntercomProvider
        appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID as string}
        autoBoot
      >
        <SWRConfig
          value={{
            shouldRetryOnError: false,
          }}
        >
          <HasDisplayCustomizerContext.Provider value={defaultValue}>
            <Component {...pageProps} />
          </HasDisplayCustomizerContext.Provider>
        </SWRConfig>
      </IntercomProvider>
    </IntlProvider>
  );
}
App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  try {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  } catch (err) {
    // This will work on both client and server sides.
    console.log(
      'The Error happened in: ',
      typeof window === 'undefined' ? 'Server' : 'Client',
    );
    // Sentry.captureException(err);
    return { pageProps };
  }
};

export default App;
