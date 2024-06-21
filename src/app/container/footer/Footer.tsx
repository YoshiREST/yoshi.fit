'use client';

import React from 'react';
import { Link, Spacer } from '@nextui-org/react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white z-50">
            <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4">

                    <span className="text-lg font-bold">yoshi.fit</span>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <Link className="text-white" href="/tos">
                            Terms of Service
                        </Link>
                        <Link className="text-white" href="/privacy">
                            Privacy Policy
                        </Link>
                        <Link className="text-white" href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            <Spacer y={1} />
            <div className="bg-gray-800 text-gray-400 text-center py-4">
                <p className="text-xs">&copy; yoshi.fit {year} | Designed with ❤️ in Southern California</p>
            </div>
        </footer>
    );
};

export default Footer;