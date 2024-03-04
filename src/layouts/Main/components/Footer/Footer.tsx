import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, List, ListItem } from '@material-ui/core';
import useBreakPoints from 'hooks/useBreakpoints';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import PinterestIcon from '@material-ui/icons/Pinterest';

import { Image } from 'components/atoms';
import Link from 'components/molecules/Link';
import {
  defineMessage,
  FormattedMessage,
  injectIntl,
  IntlShape,
} from 'react-intl';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
}));

interface Props {
  className?: string;
  pages: PagesProps;
  intl: IntlShape;
}

const Footer = ({ pages, className, intl, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  const MenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
    <List disablePadding className={classes.menuItem}>
      <ListItem disableGutters className={classes.menuGroupItem}>
        <Typography variant="body2" className={classes.menuGroupTitle}>
          {intl.formatMessage(item.groupTitle)}
        </Typography>
      </ListItem>
      {item.pages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Typography
            variant="body2"
            component={Link}
            href={page.href}
            className={clsx(classes.navLink, 'submenu-item')}
          >
            {intl.formatMessage(page.title)}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  const ContactGroup = ({ item }: ContactGroupProps): JSX.Element => (
    <List disablePadding className={classes.menuItem}>
      <ListItem disableGutters className={classes.menuGroupItem}>
        <Typography variant="body2" className={classes.menuGroupTitle}>
          {intl.formatMessage(item.groupTitle)}
        </Typography>
      </ListItem>
      {item.items.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Typography
            variant="body2"
            className={clsx(classes.navLink, 'submenu-item')}
          >
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

  const InkPODPages = (): JSX.Element => {
    const group = {
      groupTitle: defineMessage({
        defaultMessage: 'InkPOD',
        description: 'InkPOD',
      }),
      pages: [
        {
          title: defineMessage({
            defaultMessage: 'Terms of Service',
            description: 'Terms of Service',
          }),
          href: '/terms-of-service',
        },
        {
          title: defineMessage({
            defaultMessage: 'Shipping Policy',
            description: 'Shipping Policy',
          }),
          href: '/shipping-policy',
        },
        {
          title: defineMessage({
            defaultMessage: 'Return & Refund Policy',
            description: 'Return & Refund Policy',
          }),
          href: '/return-refund-policy',
        },
        {
          title: defineMessage({
            defaultMessage: 'About Us',
            description: 'About Us',
          }),
          href: '/about-us',
        },
        {
          title: defineMessage({
            defaultMessage: 'Privacy',
            description: 'Privacy',
          }),
          href: '/privacy-policy',
        },
        {
          title: defineMessage({
            defaultMessage: 'Contact',
            description: 'Contact',
          }),
          href: '/contact',
        },
      ],
    };
    return <MenuGroup item={group} />;
  };

  const ContactUs = (): JSX.Element => {
    const group = {
      groupTitle: defineMessage({
        defaultMessage: 'Contact Us',
        description: 'Contact Us',
      }),
      items: [
        {
          title: defineMessage({
            defaultMessage: 'Email: service@inkpodfulfillment.com',
            description: 'Email: service@inkpodfulfillment.com',
          }),
        },
        // {
        //   title: defineMessage({
        //     defaultMessage: 'Phone: +852 598-207-10',
        //     description: 'Phone: +852 598-207-10',
        //   }),
        // },
        {
          title: defineMessage({
            defaultMessage: 'Hours: 08:30 - 24:00 (GMT+08:00)',
            description: 'Hours: 08:30 - 24:00 (GMT+08:00)',
          }),
        },
      ],
    };
    return <ContactGroup item={group} />;
  };

  const { isMd } = useBreakPoints();

  const webCopyright = process.env.NEXT_PUBLIC_WEB_COPYRIGHT || '';
  const webRecords = process.env.NEXT_PUBLIC_WEB_RECORDS || '';

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          {/* Company info */}
          <Grid item xs={12} md={3}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <Link href="/" title="InkPOD Fulfillment">
                    <Image
                      className={classes.logoImage}
                      src="https://test-cn-shanghai.oss-cn-shanghai.aliyuncs.com/inkpod-blue.png"
                      alt="InkPOD Fulfillment"
                      lazy={false}
                    />
                  </Link>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="subtitle2" color="textSecondary">
                  <FormattedMessage
                    defaultMessage="InkPOD provides high quality customizable products with
                    instant fulfillment."
                    description="InkPOD provides high quality customizable products with
                    instant fulfillment."
                  />
                </Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={9} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item container xs={6}>
                <Grid item>
                  <DiscoverPages />
                </Grid>
                <Grid item>
                  <InkPODPages />
                </Grid>
              </Grid>

              <Grid item container xs={6} justify="flex-end">
                <ContactUs />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                {webCopyright}
                {webRecords ? (
                  <>
                    {' '}
                    <Link
                      color="textSecondary"
                      href="https://beian.miit.gov.cn/"
                      target="_blank"
                    >
                      | {webRecords}
                    </Link>
                  </>
                ) : null}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default injectIntl(Footer);
