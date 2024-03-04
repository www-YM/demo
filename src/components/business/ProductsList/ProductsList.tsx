import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from 'api';
import LoadingSection from 'components/business/LoadingSection';
import { SectionHeader } from 'components/molecules';
import ProductsPagination from 'components/MyPagination';
import useBreakPoints from 'hooks/useBreakpoints';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import { NumberParam, useQueryParams } from 'use-query-params';
import { findCategoryBySlug, getCategoryIds } from 'utils/categories';
import Categories from './Categories';
import CategoriesDrawer from './CategoriesDrawer';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  container: { marginBottom: 20 },
  card: {
    borderRadius: theme.spacing(2),
  },
  cardMedia: {
    height: 290,
    padding: theme.spacing(3, 3, 0, 3),
    position: 'relative',
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  image: {
    objectFit: 'contain',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  priceCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
  },
  pagination: {
    marginTop: theme.spacing(2),
  },
}));

const ProductsList = ({
  categories,
  className,
  title,
  onProductClick,
  onCategoryClick,
  type = 'customizable_product',
  ...rest
}: ViewComponentProps & {
  title?: string;
  onProductClick: (product: Product) => void;
  onCategoryClick: (id: number, slug: string, parentSlug: string) => void;
  categories: CategoryTreeItem[];
  type?: ProductType;
}): JSX.Element => {
  const classes = useStyles();

  const { isMd } = useBreakPoints();

  const router = useRouter();

  const { parentCategorySlug, childCategorySlug } = router.query;

  const [query, setQuery] = useQueryParams({
    current: NumberParam,
  });
  const { current } = query;

  const currentPage = () => current || 1;

  const rootCategory = findCategoryBySlug(
    categories,
    parentCategorySlug as string,
  );

  const categoryIds = getCategoryIds(
    findCategoryBySlug(
      rootCategory ? rootCategory.children : categories,
      (childCategorySlug || parentCategorySlug) as string,
    ),
  );

  let uri = `${
    api.product.getProductsUrl
  }?current=${currentPage()}&type=${type}`;
  if (categoryIds) {
    uri += `&categoryIds=${categoryIds}`;
  }
  const { data, error } = useSWR(uri, () =>
    api.product.getProducts({
      current: currentPage(),
      categoryIds: categoryIds,
      type,
    }),
  );

  const handlePageChange = (page: number) => {
    setQuery({ current: page });
    if (document.getElementById('productContainer')) {
      document.getElementById('productContainer').parentElement.scrollTop = 0;
    }
  };

  return (
    <div
      className={[classes.container, className].join(' ')}
      {...rest}
      id="productContainer"
    >
      {title ? (
        <SectionHeader
          title={title}
          // subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
          subtitleColor="textPrimary"
          subtitleVariant="body1"
          align="left"
        />
      ) : null}

      <Grid container spacing={2}>
        {isMd ? (
          <Grid item xs={4} md={3}>
            <Categories
              onClick={onCategoryClick}
              categories={categories}
            ></Categories>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <CategoriesDrawer
              categories={categories}
              onClick={onCategoryClick}
            ></CategoriesDrawer>
          </Grid>
        )}

        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {data ? (
              data.data.map((item: Product) => (
                <Grid item xs={6} sm={6} md={4} lg={3} key={item.id}>
                  <ProductCard
                    product={item}
                    onClick={() => onProductClick(item)}
                  ></ProductCard>
                </Grid>
              ))
            ) : (
              <LoadingSection></LoadingSection>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.pagination} container justify="center">
        <Grid item>
          <ProductsPagination
            count={data?.meta?.lastPage || 0}
            page={currentPage()}
            onChange={(page) => handlePageChange(page)}
          ></ProductsPagination>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsList;
