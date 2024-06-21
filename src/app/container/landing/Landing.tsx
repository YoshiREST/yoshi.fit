import { Card, Image, Link, Spacer, Button } from "@nextui-org/react";

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6 text-white min-h-screen">
            <h1 className="text-5xl font-bold mb-6">Welcome to Yoshi.FIT</h1>
            <p className="text-xl mb-10">Accessories, clothing, and supplements.</p>
            <Button auto color="gradient" className="mb-6">Shop Now</Button>
            <Spacer y={1} />
            <Link href="/contact" className="text-blue-400 hover:underline">Contact Us</Link>
        </div>
    );
};

export default Landing;
