import React from 'react';
import { Modal, Button, Text } from "@nextui-org/react";
import { TProductData } from "printify.ts/lib";

const ProductModal: React.FC<{ product: TProductData, onClose: () => void }> = ({ product, onClose }) => {
    return (
        <Modal open={true} onClose={onClose} closeButton>
            <Modal.Header>
                <Text h3>{product.name}</Text>
            </Modal.Header>
            <Modal.Body>
                <img src={product.image} alt={product.name} className="rounded-lg mb-4" />
                <Text>{product.description}</Text>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;
