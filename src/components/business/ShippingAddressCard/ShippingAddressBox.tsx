import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

type ShippingAddressBoxProps = {
  address: ShippingAddress;
};

export default function ShippingAddressBox({
  address,
}: ShippingAddressBoxProps): JSX.Element {
  return (
    <Box>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <Typography variant="body2">
            {address.firstName} {address.lastName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            {address.address1} {address.address2}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{address.city}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            {address.zip} {address.province}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{address.country}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{address.phone}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
