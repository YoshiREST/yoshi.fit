import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Landing from '@components/Landing';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <Landing />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
