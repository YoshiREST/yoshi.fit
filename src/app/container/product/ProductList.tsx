'use client';

import React, { useEffect, useState } from "react";
import { TProductData }               from "printify.ts/lib";
import { Button }                     from "@nextui-org/react";
import Slider                         from "react-slick";

import ProductModal                   from "@component/ProductModal";
import ProductCard                    from "@component/ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProductWithTags = TProductData & {
    tags: string[];
};

const getProducts = async (): Promise<TProductData[]> => {
    const response = await fetch('/api');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}

const parseTags = (products: TProductData[]): ProductWithTags[] => {
    return products.map(product => {
        const tagPattern = /\[TAGS\](.*?)\[!TAGS\]/;
        const match = tagPattern.exec(product.description);
        let tags: string[] = [];

        if (match) {
            tags = match[1].split(',').map(tag => tag.trim());
            product.description = product.description.replace(tagPattern, '').trim();
        }

        return { ...product, tags };
    });
}

const ProductCarousel: React.FC<{ title: string; products: ProductWithTags[]; isLoading: boolean; }> = ({ title, products, isLoading }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <Button auto icon={<i className="fas fa-arrow-right"></i>} className="arrow-button" />,
        prevArrow: <Button auto icon={<i className="fas fa-arrow-left"></i>} className="arrow-button" />,
    };

    return (
        <div className="max-w-full">
            {isLoading ? (
                <div className="flex space-x-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="w-full max-w-xs p-4 bg-gray-200 animate-pulse h-64 rounded-lg"></div>
                    ))}
                </div>
            ) : (
                <Slider {...settings} className="slick-slider">
                    {products.map((product: ProductWithTags) => (
                        <div key={product.id} className="p-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductWithTags[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getProducts()
            .then(productArray => {
                const parsedProducts = parseTags(productArray);
                setProducts(parsedProducts);
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

    const accessoriesProducts = products.filter(product => product.tags.includes('ACCESSORIES'));
    const mensProducts = products.filter(product => product.tags.includes('MENS'));
    const womensProducts = products.filter(product => product.tags.includes('WOMENS'));

    return (
        <div className="pt-20 space-y-16 max-w-full px-4">
            <ProductCarousel title="Accessories" products={accessoriesProducts} isLoading={isLoading} />
            <ProductCarousel title="Mens" products={mensProducts} isLoading={isLoading} />
            <ProductCarousel title="Womens" products={womensProducts} isLoading={isLoading} />
        </div>
    );
};

export default ProductList;