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
}));

const InkPodCost = ({ intl }: { intl: IntlShape }): JSX.Element => {
  const classes = useStyles();

  return (
    <Typography variant="body1" component="span">
      <FormattedMessage
        defaultMessage="InkPOD Cost"
        description="InkPOD Cost"
      />
      &nbsp;
      <Tooltip
        title={intl.formatMessage({
          defaultMessage:
            "Doesn't include shipping and other additional charges.",
          description: "Doesn't include shipping and other additional charges.",
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

export default injectIntl(InkPodCost);
