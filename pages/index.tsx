import React, { useState, useEffect } from 'react';
import Layout from '@components/Layout';
import KawaiiHeader from '@components/KawaiiHeader';
import ProductList from '@components/ProductList/ProductList';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => setProductList(data))
      .catch(() => setProductList([]));
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
