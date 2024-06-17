import { NextUIProvider } from "@nextui-org/react";

import type { Metadata }  from 'next'
import      { Inter    }  from 'next/font/google'

import Header             from "@container/header/Header";
import Footer             from "@container/footer/Footer";

import { CartProvider }   from "@context/CartContext";

import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title       : 'yoshi.fit',
  description : 'leading a world of revolution',
}


// RootLayout component
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <NextUIProvider>
            <CartProvider>
                <div>
                    <Header/>
                </div>
                <div>
                    {children}
                </div>
                <div>
                    <Footer/>
                </div>
            </CartProvider>
        </NextUIProvider>
        </body>
        </html>
    )
}

// path: src/app/layout.tsx