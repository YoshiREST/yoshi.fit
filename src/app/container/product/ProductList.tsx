'use client';

import React, { useEffect, useState } from "react";
import ProductCard from "@component/ProductCard";
import { TProductData } from "printify.ts/lib";

const getProducts = async (): Promise<TProductData[]> => {
    const response = await fetch('/api');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<TProductData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getProducts()
            .then(productArray => {
                setProducts(productArray);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error.message);
                setError("Failed to fetch products. Please try again later.");
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-8">{error}</div>;
    }

    return (
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product: TProductData) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductList;
