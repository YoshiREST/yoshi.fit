import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Yoshi Fit</h1>
                <nav>
                    <Link href="/" className="mr-4 hover:underline">Home</Link>
                    <Link href="/shop" className="mr-4 hover:underline">Shop</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

// path: src/app/container/header/Header.tsx
