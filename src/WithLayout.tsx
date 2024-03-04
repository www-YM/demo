import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';

import { useIntercom } from 'react-use-intercom';
import LogRocket from 'logrocket';
// import * as Sentry from '@sentry/nextjs';
import { getShopMeta } from 'utils/local-storage-manager';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

interface Props {
  layout: any;
  component: any;
  layoutProps?: object;
  // All other props
  [x: string]: any;
}

export default function WithLayout({
  component: Component,
  layout: Layout,
  layoutProps = {},
  ...rest
}: Props): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [themeMode, themeToggler] = useDarkMode();

  const intercom = useIntercom();

  useEffect(() => {
    const logrocketId = process.env.NEXT_PUBLIC_LOGROCKET_ID;

    if (!logrocketId) {
      return;
    }

    LogRocket.init(logrocketId);
    const shop = getShopMeta();

    if (shop) {
      intercom.update({
        userId: shop.id.toString(),
        email: shop.email,
        customAttributes: {
          shopId: shop.id,
        },
      });
    }

    if (shop) {
      LogRocket.identify(String(shop.id), {
        email: shop.email,
        shopId: shop.id,
      });
    }

    LogRocket.getSessionURL((sessionURL) => {
      // Sentry.configureScope((scope) => {
      //   scope.setExtra('sessionURL', sessionURL);
      // });
    });
  });

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0} square={true}>
        <Layout
          themeMode={themeMode}
          themeToggler={themeToggler}
          {...layoutProps}
        >
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}
