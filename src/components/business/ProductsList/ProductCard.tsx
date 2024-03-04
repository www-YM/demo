import { Chip, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Money from 'components/Money';
import React from 'react';
import { genProductURI } from 'utils/categories';
import { imageProcess } from 'utils/image-process';

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: '100%',
  },
  media: {
    width: '100%',
    height: 'auto',
    '&:hover': {
      transition: '0.5s',
      transform: 'scale(1.2)',
    },
  },
  bestseller: {
    position: 'absolute',
    top: 0,
    right: 0,
    '&.MuiChip-root': {
      borderRadius: '5px',
    },
    '&.MuiChip-colorPrimary': {
      color: 'white',
      background: '#ea5455',
    },
  },
  new: {
    position: 'absolute',
    top: 0,
    right: 0,
    '&.MuiChip-root': {
      borderRadius: '5px',
    },
    '&.MuiChip-colorPrimary': {
      color: 'white',
      background: '#28c76f',
    },
  },
  button: {
    padding: '10px',
    marginBottom: '10px',
    width: '90%',
    backgroundColor: palette.primary.main,
    textAlign: 'center',
    color: palette.primary.contrastText,
    borderRadius: '4px',
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    '&:hover': {
      backgroundColor: palette.primary.dark,
    },
  },
}));

const ProductCard = ({ product, onClick }: ProductCardProps): JSX.Element => {
  const classes = useStyles();

  const themeMode = window.localStorage.getItem('themeMode');

  const chipClass = () => {
    if (product.new) {
      return classes.new;
    }
    if (product.bestseller) {
      return classes.bestseller;
    }
    return '';
  };

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <div>
          <CardMedia
            className={classes.media}
            component="img"
            image={imageProcess(product.image, { width: 400, jpeg: true })}
            onMouseOver={(e) => {
              e.currentTarget.src = imageProcess(product.coverImageUrl, {
                width: 400,
                jpeg: true,
              });
            }}
            onMouseOut={(e) =>
              (e.currentTarget.src = imageProcess(product.image, {
                width: 400,
                jpeg: true,
              }))
            }
            title={product.title}
          />
          {chipClass() ? (
            <Chip
              className={chipClass()}
              label={product.new ? 'New' : 'Bestseller'}
              color="primary"
              size="small"
            ></Chip>
          ) : (
            ''
          )}
        </div>
        <div style={{ flex: 1, paddingTop: '10px', width: '100%' }}>
          <CardContent>
            <Grid
              style={{ height: '100%' }}
              container
              direction="column"
              justify="space-between"
              alignItems="stretch"
              alignContent="space-between"
            >
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6" component="h2">
                  <a href={genProductURI(product)} style={{ color: 'inherit' }}>
                    {product.title}
                  </a>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container>
                  {product.colorsSizes.colors.map((color) => {
                    return (
                      <Grid
                        item
                        style={{
                          width: '14px',
                          height: '14px',
                          margin: '1px',
                          backgroundColor: color.code,
                          borderRadius: '4px',
                          border:
                            themeMode === 'light'
                              ? '1px solid rgba(0,0,0,.11)'
                              : '1px solid rgba(255,255,255,.25)',
                        }}
                        key={color.code}
                      ></Grid>
                    );
                  })}
                </Grid>
              </Grid>
              {product.colorsSizes.sizes.length < 2 ? null : (
                <Grid item xs={12}>
                  <Typography variant="body2">
                    {product.colorsSizes.sizes[0]} -{' '}
                    {
                      product.colorsSizes.sizes[
                        product.colorsSizes.sizes.length - 1
                      ]
                    }
                  </Typography>
                </Grid>
              )}

              <Grid
                item
                container
                justify="space-between"
                alignItems="center"
                xs={12}
              >
                <Grid item>
                  <Typography>Cost</Typography>
                </Grid>
                <Grid
                  item
                  style={
                    product.minCost !== product.minDisplayCost
                      ? { color: 'red' }
                      : {}
                  }
                >
                  <Money
                    amount={product.minCost}
                    fontWeight="bold"
                    freeString
                  ></Money>
                </Grid>
              </Grid>
              {product.minCost !== product.minDisplayCost ? (
                <Grid
                  item
                  container
                  justify="flex-end"
                  alignItems="center"
                  style={{ textDecorationLine: 'line-through' }}
                >
                  <Money
                    amount={product.minDisplayCost}
                    fontWeight="bold"
                  ></Money>
                </Grid>
              ) : null}
            </Grid>
          </CardContent>
        </div>
        <div className={classes.button}>DESIGN</div>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
