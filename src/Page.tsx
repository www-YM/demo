import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';

import { IntercomProvider } from 'react-use-intercom';
import IntercomConfig from './IntercomConfig';
import LogrocketConfig from './LogrocketConfig';
import IntlProviderConfig from './IntlProviderConfig';

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

export default function Page({ children }): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [themeMode, themeToggler] = useDarkMode();

  return (
    <IntlProviderConfig>
      <ThemeProvider theme={getTheme(themeMode)}>
        <LogrocketConfig></LogrocketConfig>
        <IntercomProvider
          appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID as string}
          autoBoot
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Paper elevation={0} square={true}>
            <IntercomConfig>{children}</IntercomConfig>
          </Paper>
        </IntercomProvider>
      </ThemeProvider>
    </IntlProviderConfig>
  );
}
