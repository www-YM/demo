import React from 'react';
import CustomProducts from 'views/CustomProducts';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import Head from 'next/head';
import api from 'api';
import { InstantSearchServerState, getServerState } from 'react-instantsearch';
import { renderToString } from 'react-dom/server';

type CustomProductPageProps = {
  categories?: CategoryTreeItem[];
  products?: Product[];
  pageMeta?: PageMeta;
  url?: string;
  serverState?: InstantSearchServerState;
  categoryIds?: string;
};

const CustomProductPage = ({
  categories,
  categoryIds,
  products,
  pageMeta,
}: CustomProductPageProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Custom Products | InkPOD</title>
      </Head>
      <WithLayout
        component={CustomProducts}
        categories={categories}
        products={products}
        categoryIds={categoryIds}
        pageMeta={pageMeta}
        layout={Main}
      />
    </>
  );
};

export default CustomProductPage;

export async function getServerSideProps({req, query}) {
  const { data: categories } = await api.category.getCategories(
    'customizable_product',
  );

  const { data: products, meta: pageMeta } = await api.product.getProducts({
    ...query,
  });

  const protocol = req.headers.referer?.split('://')[0] || 'https';
  const url = `${protocol}://${req.headers.host}${req.url}`;
  const serverState = await getServerState(<CustomProductPage url={url} />, {
    renderToString,
  });

  return {
    props: {
      serverState,
      url,
    },
  };
}
