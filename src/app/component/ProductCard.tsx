import React, { useContext, useState } from 'react';
import { Card, Image, CardBody, Spacer, Button } from "@nextui-org/react";
import { CartContext, CartContextType } from '@context/CartContext';
import { TProductData } from "printify.ts/lib";
import parse from 'html-react-parser';
import ProductModal from './ProductModal';

const ProductCard: React.FC<{ product: TProductData }> = ({ product }) => {
    const { addToCart } = useContext(CartContext) as CartContextType;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Card className="hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image src={product.image} alt={product.name} className="rounded-t-lg" />
            <CardBody className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{parse(product.description)}</p>
                <Spacer y={0.5} />
                <Button auto onClick={() => setIsModalOpen(true)} className="mb-2">View Details</Button>
                <Button auto flat color="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardBody>
            {isModalOpen && <ProductModal product={product} onClose={() => setIsModalOpen(false)} />}
        </Card>
    );
};

export default ProductCard;
