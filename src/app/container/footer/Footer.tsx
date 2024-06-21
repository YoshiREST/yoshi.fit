import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-10">
            <div className="container mx-auto text-center">
                <p>&copy; yoshi.fit {year} | Designed with ❤️ in Southern California</p>
                <nav>
                    <a href="/privacy" className="mr-4 hover:underline">Privacy Policy</a>
                    <a href="/tos" className="hover:underline">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
