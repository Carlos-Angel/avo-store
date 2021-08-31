import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Avocados</h1>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
