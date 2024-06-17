'use client';

import React, { createContext, useState, ReactNode } from 'react';

import { Product } from "@component/ProductCard";

// Define the type for the context value
export interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
}

// Create the context with a default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the props for the CartProvider
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};