'use server';

import Printify from "printify.ts";
import { NextApiRequest, NextApiResponse } from 'next';
import { TProducts } from "printify.ts/lib";
import { NextResponse } from "next/server";

const printify = new Printify({ key: process.env.PRINTIFY_API_KEY! });

export async function GET(req: NextApiRequest, res: NextApiResponse<TProducts>) {
    try {
        const products: TProducts = await printify.getProducts('16416519');

        if (!products || !products.data) {
            throw new Error('Products data is missing or invalid');
        }

        return NextResponse.json(products.data); // Return the products as JSON response using NextResponse
    } catch (error) {

        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ error: errorMessage }, { status: 500 }); // Return an error response with status 500 using NextResponse
    }
}
