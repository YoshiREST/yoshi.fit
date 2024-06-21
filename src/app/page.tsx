'use client';

import ProductList from "@container/product/ProductList";
import Cart from "@component/Cart";

const Page: React.FC = () => {
    return (
        <div>
            <ProductList />
            <Cart />
        </div>
    );
}

export default Page;
