import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import { Image } from 'components/atoms';
import Link from 'components/molecules/Link';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainer: {
    maxWidth: 100,
    maxHeight: 28,
    [theme.breakpoints.up('md')]: {
      maxWidth: 120,
      maxHeight: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
}));

interface Props {
  themeMode: string;
  disableGutters?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const BaseTopbar = ({ themeMode, children, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar} {...rest}>
        <div className={classes.logoContainer}>
          <Link href="/" title="InkPOD Fulfillment">
            <Image
              className={classes.logoImage}
              src={
                themeMode === 'light'
                  ? 'https://test-cn-shanghai.oss-cn-shanghai.aliyuncs.com/inkpod-white.png'
                  : 'https://test-cn-shanghai.oss-cn-shanghai.aliyuncs.com/inkpod-black.png'
              }
              alt="InkPOD Fulfillment"
              lazy={false}
            />
          </Link>
        </div>
        {children}
      </Toolbar>
      <Divider />
    </>
  );
};

export default BaseTopbar;
