import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';
import { ScrollTop } from 'components/atoms';
import useSnackBarAlert from 'hooks/useSnackBarAlert';
import { SnackbarAlert } from 'components/SnackbarAlert';
import { SnackBarAlertContext } from 'hooks/useSnackBarAlertContext';
import { defineMessage, injectIntl, IntlShape } from 'react-intl';
import useShowConfirmBeforeLeaveCustomizer from 'hooks/useShowConfirmBeforeLeaveCustomizer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minHeight: '100vh',
  },
  minHeight: {
    minHeight: '70vh',
  },
}));

interface Props {
  children: React.ReactNode;
  themeToggler: Function;
  themeMode: string;
  intl: IntlShape;
}

const Main = ({
  children,
  themeToggler,
  themeMode,
  intl,
}: Props): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const {
    snackbarAlertProps,
    setSnackbarAlertProps,
    apiErrorAlert,
    successAlert,
  } = useSnackBarAlert();

  const SnackBarAlertContextDefaultValue = {
    snackbarAlertProps,
    setSnackbarAlertProps,
    apiErrorAlert,
    successAlert,
  };

  const pages = [
    {
      title: defineMessage({
        defaultMessage: 'Product Catalog',
        description: 'Product Catalog',
      }),
      href: '/custom-products',
    },
    // { title: 'New Order', href: '/sample-cart' },
    {
      title: defineMessage({
        defaultMessage: 'How It Works',
        description: 'How It Works',
      }),
      href: '/how-it-works',
    },
    {
      title: defineMessage({
        defaultMessage: 'Branding materials',
        description: 'Branding materials',
      }),
      href: '/branding-materials',
    },
    {
      title: defineMessage({
        defaultMessage: 'Warehouse',
        description: 'Warehouse',
      }),
      href: '/warehouse',
    },
    {
      title: defineMessage({
        defaultMessage: 'Product Personalization tool',
        description: 'Product Personalization tool',
      }),
      href: '/customer-print-on-demand',
    },
    // {
    //   title: defineMessage({
    //     defaultMessage: 'Blog',
    //     description: 'Blog',
    //   }),
    //   href: '/blog',
    // },
    {
      title: defineMessage({
        defaultMessage: 'Help Center',
        description: 'Help Center',
      }),
      href: '/help-center',
    },
  ];

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const { showConfirmBeforeLeaveCustomizer } =
    useShowConfirmBeforeLeaveCustomizer(intl);

  useEffect(() => {
    showConfirmBeforeLeaveCustomizer();
  }, [showConfirmBeforeLeaveCustomizer]);

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <SnackBarAlertContext.Provider value={SnackBarAlertContextDefaultValue}>
        <main className={classes.minHeight}>
          {children}
          <ScrollTop />
          <SnackbarAlert {...snackbarAlertProps} />
        </main>
      </SnackBarAlertContext.Provider>
      <Footer pages={pages} />
    </div>
  );
};

export default injectIntl(Main);
