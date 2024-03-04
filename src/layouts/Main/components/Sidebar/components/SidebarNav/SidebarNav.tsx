/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography, ListItemIcon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { clearShopMeta, clearToken } from 'utils/local-storage-manager';
import { useRouter } from 'next/router';
import { useNavItems } from 'hooks/useNavItems';
import { defineMessage, injectIntl, IntlShape } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
}));

interface Props {
  className?: string;
  onClose: Function;
  pages: PagesProps;
  intl: IntlShape;
}

const SidebarNav = ({
  pages,
  onClose,
  className,
  intl,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles();

  const router = useRouter();
  const handleNavClick = (page) => {
    if (page.href === '/logout') {
      clearToken();
      clearShopMeta();
      window.location.replace('/');

      onClose();
      return;
    }

    onClose();
    router.push(page.href);
  };

  const authPages = useNavItems();

  const MenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
    <List disablePadding>
      <ListItem disableGutters>
        <Typography
          variant="body2"
          color="primary"
          className={classes.menuGroupTitle}
        >
          {intl.formatMessage(item.groupTitle)}
        </Typography>
      </ListItem>
      {/* {item.pages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Typography
            variant="body2"
            className={clsx(classes.navLink, 'submenu-item')}
            onClick={() => onClose()}
          >
            <Link href={page.href}>{page.title}</Link>
          </Typography>
        </ListItem>
      ))} */}
      {authPages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Typography
            variant="body2"
            className={clsx(classes.navLink, 'submenu-item')}
            onClick={() => handleNavClick(page)}
          >
            {/* <Link href={page.href}>{page.title}</Link> */}
            {intl.formatMessage(page.title)}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  const DiscoverPages = (): JSX.Element => {
    const group = {
      groupTitle: defineMessage({
        defaultMessage: 'Discover',
        description: 'Discover',
      }),
      pages,
    };
    return <MenuGroup item={group} />;
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Typography variant="h6" color="textPrimary" gutterBottom>
          Account
        </Typography> */}
        <DiscoverPages />
      </ListItem>
    </List>
  );
};

export default injectIntl(SidebarNav);
