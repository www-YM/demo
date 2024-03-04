import React from 'react';
import BaseTopbar from 'layouts/components/BaseTopbar';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { PlatformTypeValue } from 'enums';

interface Props {
  children: React.ReactNode;
  themeMode: string;
  platformType: PlatformTypeValue;
}

const useStyles = makeStyles({
  flexGrow: {
    flexGrow: 1,
  },
  connectImageTip: {
    display: 'flex',
  },
  logoWrap: {
    display: 'block',
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    backgroundColor: '#ffffff',
    backgroundSize: '95% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '45%',
    border: '2px solid #e5e5e5',
  },
  line: {
    display: 'block',
    width: '55px',
    height: '2px',
    border: '1px solid #e5e5e5',
    marginTop: '19px',
  },
  active: {
    borderColor: '#57b856',
  },
  dot: {
    display: 'block',
    width: '10px',
    height: '10px',
    marginTop: '15px',
    borderRadius: '100%',
    backgroundColor: '#57b856',
  },
});

const WEB_LOGO_URL =
  'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/inkpod-logo.svg';
const PLATFORM_LOGO_URL_MAP = {
  shopify:
    'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/shopify-logo.svg',
  etsy: 'https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/etsy-logo.svg',
};

const Connect = ({ themeMode, children, platformType }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <BaseTopbar themeMode={themeMode}>
        <div className={classes.flexGrow} />

        {/* 店铺关联到平台图标 */}
        <div className={classes.connectImageTip}>
          <div
            className={clsx(classes.logoWrap, classes.active)}
            style={{
              backgroundImage: `url(${PLATFORM_LOGO_URL_MAP[platformType]})`,
            }}
          />
          <div className={clsx(classes.line, classes.active)} />
          <div className={classes.dot} />
          <div className={classes.line} />
          <div
            className={classes.logoWrap}
            style={{ backgroundImage: `url(${WEB_LOGO_URL})` }}
          />
        </div>
      </BaseTopbar>
      <main>{children}</main>
    </div>
  );
};

export default Connect;
