import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import Head from 'next/head';
import api from 'api';
import dynamic from 'next/dynamic';

const CustomProductDetail = dynamic(
  () => {
    return import('views/CustomProductDetail');
  },
  { ssr: false },
);

type CustomProductDetailPageProps = {
  productDetail: ProductDetail;
  designModel: DesignModel;
};

export default function CustomProductDetailPage({
  productDetail,
  designModel,
}: CustomProductDetailPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{productDetail.title} | InkPOD</title>
      </Head>
      <div id="custom-product-detail">
        <WithLayout
          component={CustomProductDetail}
          productDetail={productDetail}
          designModel={designModel}
          layout={Main}
        />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await api.product.findProductBySlug(params.productSlug);

  const { data: designModel } = await api.designModel.findByProductId(data.id);

  return {
    props: {
      productDetail: data,
      designModel,
    },
  };
}
