
import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Header />
        <Main />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
