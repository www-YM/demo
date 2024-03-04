import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';
import Thumbnail from 'components/molecules/Thumbnail';
import Money from 'components/Money';
import Link from 'components/molecules/Link';
import { genProductURI } from 'utils/categories';

const useStyles = makeStyles((theme) => ({
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    width: '100%',
  },
  thumb: {
    marginBottom: theme.spacing(2),
  },
  root: {
    height: '100%',
    width: '100%',
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1),
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2),
  },
  jobTitle: {
    fontWeight: 700,
  },
  dotMargin: {
    margin: theme.spacing(0, 1),
  },
}));

type CardProductProps = {
  product: BestSellerProduct;
  variant: string;
  [key: string]: any;
};

/**
 * Component to display the job card
 *
 * @param {Object} props
 */
const CardProduct = ({
  product,
  className,
  ...rest
}: CardProductProps): JSX.Element => {
  const classes = useStyles();

  return (
    <CardBase
      className={clsx('card-job', classes.root, className)}
      align="left"
      {...rest}
    >
      <>
        <Grid className={classes.thumb} container spacing={2}>
          <Grid item container alignItems="center" xs={12}>
            <Thumbnail width={250} src={product.coverImageUrl}></Thumbnail>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item container direction="column" alignItems="center" xs={12}>
            <Typography
              component="p"
              variant="subtitle1"
              color="textSecondary"
              className={classes.title}
            >
              <Link
                noLinkStyle
                style={{ color: 'inherit', cursor: 'pointer' }}
                href={genProductURI(product)}
              >
                {product.title}
              </Link>
            </Typography>
            <Typography component="p" variant="subtitle1" color="textSecondary">
              <Money amount={product.minCost}></Money>
            </Typography>
          </Grid>
        </Grid>
      </>
    </CardBase>
  );
};

export default CardProduct;
