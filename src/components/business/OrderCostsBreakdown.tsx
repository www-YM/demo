import {
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Money from 'components/Money';
import React from 'react';
import { FormattedMessage } from 'react-intl';

type OrderCostProps = {
  data: {
    cost: number;
    warehouseProcessingFee: number;
    shipping: number;
    vat: number;
    discount: number;
  };
};

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function OrderCostsBreakdown({
  data,
}: OrderCostProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Typography component="p" variant="h5" gutterBottom>
        <FormattedMessage
          defaultMessage="Costs breakdown"
          description="Costs breakdown"
        />
      </Typography>

      <Grid container direction="column" spacing={0}>
        <Grid className={classes.row} item>
          <Typography component="p">
            <FormattedMessage
              defaultMessage="Products"
              description="Products"
            />
          </Typography>
          <Typography component="p">
            <Money amount={data.cost} fontWeight="bold"></Money>
          </Typography>
        </Grid>
        <Grid className={classes.row} item>
          <Typography component="p">
            <FormattedMessage
              defaultMessage="Warehouse processing"
              description="Warehouse processing"
            />
          </Typography>
          <Typography component="p">
            <Money
              amount={data.warehouseProcessingFee}
              fontWeight="bold"
            ></Money>
          </Typography>
        </Grid>
        <Grid className={classes.row} item>
          <Typography component="p">
            <FormattedMessage
              defaultMessage="Shipping"
              description="Shipping"
            />
          </Typography>
          <Typography component="p">
            <Money amount={data.shipping} fontWeight="bold"></Money>
          </Typography>
        </Grid>
        {data.vat === 0 ? (
          <></>
        ) : (
          <Grid className={classes.row} item>
            <Typography component="p">VAT</Typography>
            <Typography component="p">
              <Money amount={data.vat} fontWeight="bold"></Money>
            </Typography>
          </Grid>
        )}
        <Grid className={classes.row} item>
          <Typography component="p">
            <FormattedMessage
              defaultMessage="Discount"
              description="Discount"
            />
          </Typography>
          <Typography component="p">
            -&nbsp;<Money amount={data.discount} fontWeight="bold"></Money>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider}></Divider>
        </Grid>
        <Grid className={classes.row} item>
          <Typography component="p">
            <FormattedMessage defaultMessage="Total" description="Total" />
          </Typography>
          <Typography component="p">
            <Money
              fontWeight="bold"
              amount={
                data.cost +
                data.shipping +
                data.vat +
                data.warehouseProcessingFee -
                data.discount
              }
            ></Money>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
