import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Link from 'components/molecules/Link';
import { Alert } from '@material-ui/lab';
import { FormattedMessage } from 'react-intl';
import ButtonLink from './molecules/ButtonLink';
import { makeStyles } from '@material-ui/core/styles';
import ArticleLink from './business/ArticleLink';

const useStyles = makeStyles((theme) => ({
  marginY: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const BaseNotification = (): JSX.Element => {
  const classes = useStyles();

  return <></>;
  // return (
  //   <Alert className={classes.marginY} severity="success">
  //     <Grid container alignItems="center" spacing={1}>
  //       <Grid item>
  //         <Typography variant="body1">
  //           Enable the InkPOD product personalization tool for your store and
  //           let your customers create personalized products
  //         </Typography>
  //       </Grid>
  //       <Grid item>
  //         <ButtonLink
  //           size="small"
  //           variant="contained"
  //           href="/customer-print-on-demand"
  //         >
  //           Get started
  //         </ButtonLink>
  //       </Grid>
  //     </Grid>
  //   </Alert>
  // );
  // return (
  //   <Alert style={{ marginTop: '1rem' }} severity="error">
  //     <Grid container alignItems="center" alignContent="center">
  //       <Grid>
  //         <ArticleLink
  //           href="https://help.inkpodfulfillment.com/en/articles/8875842-managing-chinese-new-year-2024-cut-off-dates"
  //           articleId={8875842}
  //           fontIconClass=""
  //           title="Chinese New Year 2024: Key Cut Off Dates from Feb 9th to 17th - Click for More Info!"
  //         ></ArticleLink>
  //       </Grid>
  //     </Grid>
  //   </Alert>
  // );
};

export default BaseNotification;
