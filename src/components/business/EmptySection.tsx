import { Fade, Grid, makeStyles, Typography } from '@material-ui/core';
import { Section } from 'components/organisms';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '30hv',
    minHeight: '30vh',
  },
}));

export default function EmptySection(props: { content?: string }): JSX.Element {
  const { content = 'Sorry, nothing found' } = props;

  const classes = useStyles();

  return (
    <Section className={classes.root}>
      <Fade in={true}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h6" component="p">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </Section>
  );
}
