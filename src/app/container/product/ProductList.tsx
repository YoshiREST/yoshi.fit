'use client';

import React, { useEffect, useState } from "react";
import ProductCard from "@component/ProductCard";
import { TProductData, TProducts } from "printify.ts/lib";

const getProducts = async (): Promise<TProductData[]> => {
    const response = await fetch('/api');
    return response.json();
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<TProductData[]>([]);

    useEffect(() => {
        getProducts()
            .then(productArray => {
                setProducts(productArray);
            })
            .catch(error => {
                console.error("Error fetching products:", error.message);
            });
    }, []);

    return (
        <main className="p-4 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product: TProductData) => (
                    <ProductCard product={product} key={product.id} {...product} />
                ))}
            </div>
        </main>
    );
};

export default ProductList;
