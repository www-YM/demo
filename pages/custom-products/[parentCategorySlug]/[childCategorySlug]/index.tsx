/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CustomProducts from 'views/CustomProducts';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import Head from 'next/head';
import api from 'api';
import { findCategoryBySlug, getCategoryIds } from 'utils/categories';

type Props = {
  categories: CategoryTreeItem[];
  products: Product[];
  pageMeta: PageMeta;
};

const ChildCategoryProductsPage = ({
  categories,
  products,
  pageMeta,
}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Custom Products | InkPOD</title>
      </Head>
      <WithLayout
        component={CustomProducts}
        categories={categories}
        products={products}
        pageMeta={pageMeta}
        layout={Main}
      />
    </>
  );
};

export default ChildCategoryProductsPage;

export async function getServerSideProps(context) {
  const { parentCategorySlug, childCategorySlug } = context.query;

  const { data: categories } = await api.category.getCategories(
    'customizable_product',
  );

  const rootCategory = findCategoryBySlug(categories, parentCategorySlug);

  const currentCategory = findCategoryBySlug(
    rootCategory.children,
    childCategorySlug,
  );

  const currentCategoryIds = getCategoryIds(currentCategory);

  const { data: products, meta: pageMeta } = await api.product.getProducts({
    ...context.query,
    categoryIds: currentCategoryIds,
  });

  return {
    props: {
      categories,
      products,
      pageMeta,
    },
  };
}
