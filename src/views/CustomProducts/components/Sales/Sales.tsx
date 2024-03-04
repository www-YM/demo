import React from 'react';
import CardProduct from '../CardProduct';
import { Grid, makeStyles } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import ButtonLink from 'components/molecules/ButtonLink';
import { useRouter } from 'next/router';
import useBreakPoints from 'hooks/useBreakpoints';
import { genProductURI } from 'utils/categories';
import { injectIntl } from 'react-intl';

const useStyles = makeStyles(() => ({
  card: {
    cursor: 'pointer',
  },
}));

const Sales = ({
  data,
  className,
  intl,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const { isMd, isLg } = useBreakPoints();

  const getProducts = () => {
    switch (true) {
      case isLg:
        return data.slice(0, data.length - 1);
      case isMd:
        return data;
      default:
        return data.slice(0, data.length - 1);
    }
  };

  const router = useRouter();
  const goToProduct = (product: Product) => router.push(genProductURI(product));

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={intl.formatMessage({
          defaultMessage: 'Popular products',
          description: 'Popular products',
        })}
        subtitle={
          <>
            {intl.formatMessage({
              defaultMessage: 'Custom a product your customers love.',
              description: 'Custom a product your customers love.',
            })}{' '}
            <LearnMoreLink
              title={intl.formatMessage({
                defaultMessage: 'See all products',
                description: 'See all products',
              })}
              href="/custom-products"
              variant="h6"
            />
          </>
        }
        align="left"
      />
      <Grid className={classes.card} container spacing={2}>
        {data &&
          getProducts().map((item: any, index: number) => (
            <Grid
              key={index}
              item
              container
              alignItems="center"
              direction="column"
              xs={6}
              sm={6}
              md={4}
              lg={3}
            >
              <CardProduct
                variant="outlined"
                liftUp
                product={item}
                onClick={() => goToProduct(item)}
              />
            </Grid>
          ))}
        <Grid item container justify="center" xs={12}>
          <ButtonLink
            href="/custom-products"
            variant="contained"
            color="primary"
            size="large"
          >
            {intl.formatMessage({
              defaultMessage: 'See all products',
              description: 'See all products',
            })}
          </ButtonLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default injectIntl(Sales) as React.FC<ViewComponentProps>;
