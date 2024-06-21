import React, { useContext, useState } from 'react';
import { Modal, ModalBody, Button, Select, Spacer } from '@nextui-org/react';
import { CartContext, CartContextType } from '@context/CartContext';
import { TProductData } from 'printify.ts/lib';
import parse from 'html-react-parser';

interface ProductModalProps {
    product: TProductData;
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    const { addToCart } = useContext(CartContext) as CartContextType;
    const [selectedSize, setSelectedSize] = useState<string>(''); // State to manage selected size
    const [quantity, setQuantity] = useState<number>(1); // State to manage quantity

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size.');
            return;
        }

        addToCart({
            id: product.id,
            image: product.images[0].src,
            title: product.title,
            price: product.variants[0].price / 100,
            description: product.description,
            size: selectedSize,
            quantity: quantity,
        });

        onClose(); // Close modal after adding to cart
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} backdrop={'blur'}>
            <ModalBody>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                    <Button size="small" auto onClick={onClose}>
                        Close
                    </Button>
                </div>
                <Spacer y={1} />
                <div className="flex">
                    <div className="w-1/2 pr-4">
                        <img src={product.images[0].src} alt={product.title} className="rounded-lg w-full" />
                    </div>
                    <div className="w-1/2">
                        <p className="text-gray-600">{parse(product.description)}</p>
                        <Spacer y={1} />
                        <p>Select Size:</p>
                        <Spacer y={0.5} />
                        <Select
                            placeholder="Select size"
                            options={[
                                { value: 'S', label: 'Small' },
                                { value: 'M', label: 'Medium' },
                                { value: 'L', label: 'Large' },
                                { value: 'XL', label: 'Extra Large' },
                            ]}
                            value={selectedSize}
                            onChange={(value) => setSelectedSize(value as string)}
                        />
                        <Spacer y={1} />
                        <p>Quantity:</p>
                        <Spacer y={0.5} />
                        <input
                            type="number"
                            className="input"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                        <Spacer y={1} />
                        <Button
                            color="primary"
                            onClick={handleAddToCart}
                            className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ProductModal;