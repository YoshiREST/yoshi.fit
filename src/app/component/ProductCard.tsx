import React, { useContext, useState } from 'react';
import { Card, Image, CardBody, Spacer, Button } from "@nextui-org/react";
import { CartContext, CartContextType } from '@context/CartContext';
import { TProductData } from "printify.ts/lib";
import parse from 'html-react-parser';
import ProductModal from './ProductModal'; // Import the ProductModal component

interface ProductCardProps {
    product: TProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useContext(CartContext) as CartContextType;
    const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

    const handleAddToCart = () => {
        setIsModalOpen(true); // Open modal when "Add to Cart" is clicked
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <>
            <Card className="w-full max-w-xs p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
                    <h4 className="text-xl font-semibold text-gray-800">{product.title}</h4>
                    <p className="text-gray-600">{parse(product.description)}</p>
                    <Spacer y={0.5} />
                    <p className="text-lg font-bold text-gray-800">${(product.variants[0].price) / 100}</p>
                    <Spacer y={0.5} />
                    <Button
                        className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                        color="primary"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </CardBody>
            </Card>
            <ProductModal product={product} isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default ProductCard;