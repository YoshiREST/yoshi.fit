import React, { useContext, useState } from 'react';
import { Card, Image, CardBody, Spacer, Button } from "@nextui-org/react";
import { CartContext, CartContextType } from '@context/CartContext';

import { TProductData } from "printify.ts/lib";

import parse from 'html-react-parser';

// Define the props for ProductCard component
interface ProductCardProps {
    product: TProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useContext(CartContext) as CartContextType;


    const handleAddToCart = () => {
        addToCart({ id: product.id, image: product.images[0].src, title: product.title, price: (product.variants[0].price/100), description: product.description });
    };

    return (
        <Card className="w-full max-w-xs p-4 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg text-center">
            <CardBody>
                <div className="relative">
                    <Image
                        src={product.images[0].src}
                        alt={product.title}
                        width="100%"
                        height="auto"
                        className="rounded-lg"
                    />
                </div>
                <Spacer y={1} />
                <h4 className="text-xl font-semibold text-white">{product.title}</h4>
                <p className="text-gray-300">{parse(product.description)}</p>
                <Spacer y={0.5} />
                <p className="text-lg font-bold text-white">${(product.variants[0].price)/100}</p>
                <Spacer y={0.5} />
                <Button className={"auto shadow"} color="primary" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </CardBody>
        </Card>
    );
};

export default ProductCard;