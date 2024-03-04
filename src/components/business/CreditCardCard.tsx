import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  colors,
} from '@material-ui/core';
import clsx from 'clsx';
import { Icon } from 'components/atoms';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mt: {
    marginTop: theme.spacing(1),
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

export default function CreditCardCard({
  creditCard,
  onRemove,
  className = '',
  onSelect,
}: {
  creditCard: UserSetting['paymentMethods'][0];
  onRemove?: () => void;
  className?: string;
  onSelect?: (id) => void;
}): JSX.Element {
  const classes = useStyles();

  const brandIcon = (brand: string) => {
    switch (brand) {
      case 'visa':
        return <Icon fontIconClass="fa fa-cc-visa" />;
      case 'mastercard':
        return <Icon fontIconClass="fa fa-cc-mastercard" />;
      case 'amex':
        return <Icon fontIconClass="fa fa-cc-amex" />;

      case 'discover':
        return <Icon fontIconClass="fa fa-cc-discover" />;
      case 'diners-club':
        return <Icon fontIconClass="fa fa-cc-diners-club" />;
      case 'jcb':
        return <Icon fontIconClass="fa fa-cc-jcb" />;
      default:
        return <Icon fontIconClass="fa fa-credit-card" />;
    }
  };

  return (
    <Card
      onClick={() => onSelect(creditCard.id)}
      className={clsx('CreditCardCard', className)}
      variant="outlined"
    >
      <CardContent>
        {/* {creditCard.isDefault ? (
          <Grid container>
            <Chip size="small" label="Default" color="primary"></Chip>
          </Grid>
        ) : null} */}
        <Grid className={classes.mt} container justify="space-between">
          <Grid item>
            <Typography>
              {brandIcon(creditCard.meta.brand)}
              &nbsp; Card Number XXXX XXXX XXXX&nbsp;
              {creditCard.meta.last4}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              EXP: {creditCard.meta.expMonth}/{creditCard.meta.expYear}{' '}
            </Typography>
          </Grid>
        </Grid>
        {onRemove ? (
          <Grid className={classes.mt} container justify="flex-end" spacing={1}>
            {/* <Grid item>
              <Button variant="contained" color="default" onClick={onRemove}>
                Set as default
              </Button>
            </Grid> */}
            <Grid item>
              <Button variant="contained" color="secondary" onClick={onRemove}>
                Remove
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </CardContent>
    </Card>
  );
}
