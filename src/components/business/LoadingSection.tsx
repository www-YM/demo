import { Fade, Grid, makeStyles, Typography } from '@material-ui/core';
import { Section } from 'components/organisms';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100hv',
    minHeight: '100vh',
  },
}));

export default function LoadingSection(): JSX.Element {
  const classes = useStyles();

  return (
    <Section className={classes.root}>
      <Fade in={true}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="body1" component="p">
              Loading ...
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </Section>
  );
}
