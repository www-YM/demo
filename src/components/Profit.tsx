import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { makeStyles, Theme, Tooltip, Typography } from '@material-ui/core';
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

const Profit = ({ intl }: { intl: IntlShape }): JSX.Element => {
  const classes = useStyles();

  return (
    <Typography variant="body1" component="span">
      <FormattedMessage defaultMessage="Profit" description="Profit" />
      <Tooltip
        title={intl.formatMessage({
          defaultMessage:
            'Adjust the profit to balance out the amount of money that goes towards taxes and shipping costs',
          description:
            'Adjust the profit to balance out the amount of money that goes towards taxes and shipping costs',
        })}
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

export default injectIntl(Profit);
