import ErrorOutline from '@material-ui/icons/ErrorOutline';
import {
  Link,
  makeStyles,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';

const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    tooltip: {
      backgroundColor: theme.palette.common.black,
      fontSize: theme.typography.pxToRem(14),
      maxWidth: 200,
    },
  },
  link: {
    textDecoration: 'underline',
  },
}));

const YourRetailPrice = ({ intl }: { intl: IntlShape }): JSX.Element => {
  const classes = useStyles();

  return (
    <Typography variant="body1" component="span">
      <FormattedMessage
        defaultMessage="Your Retail Price"
        description="Your Retail Price"
      />
      <Tooltip
        title={
          <>
            <FormattedMessage
              defaultMessage="What is a"
              description="`What is a` 完整句子 What is a retail Price"
            />
            &nbsp;
            <Link
              color="inherit"
              className={classes.link}
              href="/help-center/categories/1"
              target="_blank"
            >
              <FormattedMessage
                defaultMessage="retail Price"
                description="`What is a` 完整句子 What is a retail Price"
              />
            </Link>
            ?
          </>
        }
        className={classes.tooltip}
        enterDelay={100}
        leaveDelay={300}
        interactive
        placement="top"
      >
        <ErrorOutline style={{ fontSize: 15 }}></ErrorOutline>
      </Tooltip>
    </Typography>
  );
};

export default injectIntl(YourRetailPrice);
