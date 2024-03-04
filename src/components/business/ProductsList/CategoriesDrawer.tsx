import { Button, Drawer, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import Categories from './Categories';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullHeight: {
    height: '100%',
  },
});

export default function CategoriesDrawer({
  categories,
  onClick,
  buttonSize = 'small',
  buttonColor = 'primary',
  buttonVariant = 'contained',
  buttonFullWidth = false,
  buttonFullHeight = false,
}: {
  categories: CategoryTreeItem[];
  onClick: (id: number, slug: string, parentSlug: string, name: string) => void;
  buttonSize?: 'small' | 'medium' | 'large';
  buttonColor?: 'primary' | 'default';
  buttonVariant?: 'contained' | 'outlined';
  buttonFullWidth?: boolean;
  buttonFullHeight?: boolean;
}): JSX.Element {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <Button
        className={clsx(buttonFullHeight ? classes.fullHeight : '')}
        variant={buttonVariant}
        color={buttonColor}
        size={buttonSize}
        onClick={toggleDrawer(true)}
        fullWidth={buttonFullWidth}
      >
        Choose categories
      </Button>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <Categories
          className={classes.list}
          categories={categories}
          onClick={onClick}
        ></Categories>
      </Drawer>
    </>
  );
}
