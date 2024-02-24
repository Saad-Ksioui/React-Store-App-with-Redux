import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto mt-8 h-[543px] flex justify-center items-center flex-col">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Redux Toolkit Simple Store</h1>
      <p className="text-lg mb-4">Browse our products and start shopping!</p>
      <div className="flex justify-center">
        <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          View Products
        </Link>
      </div>
    </div>
  );
}

export default Home;
