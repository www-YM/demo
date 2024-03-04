import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import ButtonLink from 'components/molecules/ButtonLink';
import { defineMessage, injectIntl, IntlShape } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 500,
  },
  mt: {
    marginTop: theme.spacing(2),
  },
}));

const Calculator = injectIntl(({ intl }: { intl: IntlShape }) => {
  const classes = useStyles();

  const saleShoesAt = defineMessage({
    defaultMessage: 'You sell a pair of shoes at $70.00',
    description: 'You sell a pair of shoes at $70.00',
  });

  const payCostAt = defineMessage({
    defaultMessage: 'You pay for item production $35.00',
    description: 'You pay for item production $35.00',
  });

  const profit = defineMessage({
    defaultMessage: 'Your profit $35.00',
    description: 'Your profit $35.00',
  });

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h6">{intl.formatMessage(saleShoesAt)}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{intl.formatMessage(payCostAt)}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{intl.formatMessage(profit)}</Typography>
      </Grid>
      <Grid item>
        <ButtonLink
          className={classes.mt}
          variant="contained"
          color="primary"
          size="large"
          href="/custom-products"
        >
          {intl.formatMessage({
            defaultMessage: 'Start selling',
            description: 'Start selling',
          })}
        </ButtonLink>
      </Grid>
    </Grid>
  );
});

const Profits = ({
  className,
  intl,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item container alignItems="center" xs={12} md={6}>
          <div>
            <SectionHeader
              title={intl.formatMessage({
                defaultMessage: 'This how you make money',
                description: 'This how you make money',
              })}
              subtitle={<Calculator></Calculator>}
              align="left"
              titleVariant="h4"
              disableGutter
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/relax-in-sofa.svg"
            alt="Features"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default injectIntl(Profits) as React.FC<ViewComponentProps>;
