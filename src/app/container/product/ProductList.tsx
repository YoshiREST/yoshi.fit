'use client';

import ProductCard from "@component/ProductCard";

const products = [
    {
        id: 1,
        name: "Fitness Tracker",
        description: "Track your fitness activities with ease.",
        price: 199.99,
        images: ["/path/to/fitness-tracker.jpg"],
    },

    // Add more products here
];

const ProductList: React.FC = () => {
    return (
        <main className="p-4 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard product={product} key={product.id} {...product} />
                ))}
            </div>
        </main>
    );
};

export default ProductList;
