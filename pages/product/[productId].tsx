import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    if (productId) {
      window
        .fetch(`/api/avo/${productId}`)
        .then((res) => res.json())
        .then((res) => setProduct(res))
        .catch((err) => console.error(err.message));
    }
  }, [productId]);

  return (
    <div>
      <h1>Product {product?.name}</h1>
      <p>$ {product?.price}</p>
    </div>
  );
};

export default ProductItem;
