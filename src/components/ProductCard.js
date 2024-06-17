
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ image, title, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ image, title, price });
  };

  return (
    <div className="border p-4 rounded-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg mt-2">{title}</h2>
      <p className="text-gray-500">${price}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
