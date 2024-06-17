import React, { useContext, useState } from 'react';
import { Card, Image, CardBody, Spacer, Button } from "@nextui-org/react";
import { CartContext, CartContextType } from '@context/CartContext';

// Define the Product interface
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
}

// Define the props for ProductCard component
interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useContext(CartContext) as CartContextType;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleAddToCart = () => {
        addToCart({ id: product.id, images: product.images, name: product.name, price: product.price, description: product.description });
    };

    return (
        <Card className="w-full max-w-xs p-4 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg text-center">
            <CardBody>
                <div className="relative">
                    <Image
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        width="100%"
                        height="auto"
                        className="rounded-lg"
                    />
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                        <Button className={"auto shadow"} onClick={handlePreviousImage}>{"<"}</Button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <Button className={"auto shadow"} onClick={handleNextImage}>{">"}</Button>
                    </div>
                </div>
                <Spacer y={1} />
                <h4 className="text-xl font-semibold text-white">{product.name}</h4>
                <p className="text-gray-300">{product.description}</p>
                <Spacer y={0.5} />
                <p className="text-lg font-bold text-white">${product.price}</p>
                <Spacer y={0.5} />
                <Button className={"auto shadow"} color="primary" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </CardBody>
        </Card>
    );
};

export default ProductCard;