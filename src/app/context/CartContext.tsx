'use client';

import React, { createContext, useState, ReactNode } from 'react';

import {TProductData} from "printify.ts/lib";


// Define the type for the context value
export interface CartContextType {
    cart: TProductData[];
    addToCart: (product: TProductData) => void;
}

// Create the context with a default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the props for the CartProvider
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<TProductData[]>([]);

    const addToCart = (product: TProductData) => {
        setCart([...cart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};