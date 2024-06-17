
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, image: 'path/to/image1.jpg', title: 'Product 1', price: 29.99 },
  { id: 2, image: 'path/to/image2.jpg', title: 'Product 2', price: 39.99 },
  { id: 3, image: 'path/to/image3.jpg', title: 'Product 3', price: 49.99 },
];

const Main = () => {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
};

export default Main;
