
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="border-b py-2">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover inline-block mr-4" />
            <span>{item.title}</span>
            <span className="ml-4">${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
