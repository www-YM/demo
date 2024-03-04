/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import api from 'api';
import Main from 'layouts/Main';
import Head from 'next/head';
import React from 'react';
import { findCategoryBySlug, getCategoryIds } from 'utils/categories';
import CustomProducts from 'views/CustomProducts';
import WithLayout from 'WithLayout';

type Props = {
  categories: CategoryTreeItem[];
  products: Product[];
  pageMeta: PageMeta;
  categoryIds: string;
};

const ParentCategoryProductsPage = ({
  categories,
  categoryIds,
}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Custom Products | InkPOD</title>
      </Head>
      <WithLayout
        component={CustomProducts}
        categories={categories}
        categoryIds={categoryIds}
        layout={Main}
      />
    </>
  );
};

export default ParentCategoryProductsPage;

export async function getServerSideProps(context) {
  const { data: categories } = await api.category.getCategories(
    'customizable_product',
  );

  const currentCategory = findCategoryBySlug(
    categories,
    context.query.parentCategorySlug,
  );

  const currentCategoryIds = getCategoryIds(currentCategory);

  return {
    props: {
      categories,
      categoryIds: currentCategoryIds,
    },
  };
}
