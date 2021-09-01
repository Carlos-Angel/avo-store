import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fetch from 'isomorphic-unfetch';
import Layout from '@components/Layout';
import ProductSummary from '@components/ProductSummary';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://avo-store-three.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  const paths = productList.map(({ id }) => ({ params: { productId: id } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://avo-store-three.vercel.app/api/avo/${params?.productId}`,
  );
  const product: TProduct = await response.json();

  return {
    props: { product },
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;
