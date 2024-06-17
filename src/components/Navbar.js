
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-2xl">Yoshi Outwear</div>
      <div>
        <a href="#" className="px-4">Home</a>
        <a href="#" className="px-4">Shop</a>
        <a href="#" className="px-4">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
