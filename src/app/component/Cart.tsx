import React, { useContext }            from 'react';
import { CartContext, CartContextType } from '@context/CartContext';

const Cart: React.FC = () => {
    const { cart } = useContext(CartContext) as CartContextType;

    return (
        <div className="p-4 text-white">
        <h2 className="text-2xl mb-4">Cart</h2>
            <ul>
            {cart.map((item, index) => (
                    <li key={index} className="border-b py-2">
                <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover inline-block mr-4" />
                <span>{item.name}</span>
                <span className="ml-4">${item.price}</span>
                </li>
    ))}
    </ul>
    </div>
);
};

export default Cart;