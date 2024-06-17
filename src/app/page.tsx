'use client';

import ProductList from "@container/product/ProductList";
import Landing     from "@container/landing/Landing";
import Cart        from "@component/Cart";

const Page: React.FC = () => {
    return (
        <div className="">
            <Landing/>
            <ProductList />
            <Cart/>
        </div>
    );
}

export default Page;
