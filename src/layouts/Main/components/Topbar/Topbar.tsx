import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { DarkModeToggler } from 'components/atoms';
import BaseTopbar from 'layouts/components/BaseTopbar';
import { useRouter } from 'next/router';
import { getNavItems } from './nav-items';
import { clearShopMeta, clearToken } from 'utils/local-storage-manager';
import LanguageSelector from 'layouts/components/LanguageSelector';

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    paddingLeft: '10px',
    paddingRight: '10px',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    // marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(2),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 150,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));

interface Props {
  className?: string;
  onSidebarOpen: Function;
  pages: PagesProps;
  themeMode: string;
  themeToggler: Function;
}

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  className,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles();

  const pages = getNavItems();

  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null);

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>, navItem): void => {
    event.preventDefault();

    setAnchorEl(event.target);
    setOpenedPopoverId(navItem.id);

    if (navItem.href) {
      router.push(navItem.href);
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>, page): void => {
    event.preventDefault();
    if (page.href === '/logout') {
      clearToken();
      clearShopMeta();
      window.location.replace('/');
      return;
    }
    setAnchorEl(null);
    setOpenedPopoverId(null);

    if (page.href) {
      router.push(page.href);
    }
  };

  const MenuGroup = ({
    pages,
  }: {
    pages: { href: string; title: string }[];
  }): JSX.Element => (
    <List disablePadding>
      {pages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Typography
            variant="body1"
            component={Link}
            href={page.href}
            className={clsx(classes.navLink, 'submenu-item')}
            color="textSecondary"
            onClick={(e) => handleClose(e, page)}
          >
            {page.title}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  const renderPagesPopoverContent = (navItem): JSX.Element | null => {
    if (
      ['catalog', 'branding-materials', 'orders', 'my-stores'].includes(
        navItem.id,
      )
    ) {
      return <></>;
    }
    if (['services', 'account'].includes(navItem.id)) {
      return <MenuGroup pages={navItem.children} />;
    }
    return null;
  };

  return (
    <BaseTopbar
      disableGutters
      className={classes.toolbar}
      themeMode={themeMode}
      {...rest}
    >
      {/* nav items */}
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          {Object.keys(pages).map((key, i) => {
            const navItem = pages[key];

            const hasChildren = (item) =>
              Object.keys(item.children).length !== 0;

            return (
              <div key={navItem.id}>
                <ListItem
                  aria-describedby={navItem.id}
                  onClick={(e) => handleClick(e, navItem)}
                  className={clsx(
                    classes.listItem,
                    openedPopoverId === navItem.id
                      ? classes.listItemActive
                      : '',
                  )}
                >
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    component={Link}
                    href={navItem.href}
                    className={clsx(classes.listItemText, 'menu-item')}
                  >
                    {navItem.title}
                  </Typography>
                  {hasChildren(navItem) ? (
                    <ListItemIcon className={classes.listItemIcon}>
                      <ExpandMoreIcon
                        className={
                          openedPopoverId === navItem.id
                            ? classes.expandOpen
                            : ''
                        }
                        fontSize="small"
                      />
                    </ListItemIcon>
                  ) : null}
                </ListItem>
                {hasChildren(navItem) ? (
                  <Popover
                    elevation={1}
                    id={navItem.id}
                    open={openedPopoverId === navItem.id}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    classes={{ paper: classes.popover }}
                  >
                    <div>{renderPagesPopoverContent(navItem)}</div>
                  </Popover>
                ) : null}
              </div>
            );
          })}
          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <DarkModeToggler
              themeMode={themeMode}
              onClick={() => themeToggler()}
            />
          </ListItem>
        </List>
      </Hidden>
      <LanguageSelector />
      <Hidden mdUp>
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </BaseTopbar>
  );
};

export default Topbar;
