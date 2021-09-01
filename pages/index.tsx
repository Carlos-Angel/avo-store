import React from 'react';
import Layout from '@components/Layout';
import KawaiiHeader from '@components/KawaiiHeader';
import ProductList from '@components/ProductList/ProductList';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const response = await fetch('https://avo-store-three.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: { productList },
  };
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href='/yes-or-no'>
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
