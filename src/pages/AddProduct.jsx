import React, { useState } from 'react';

const AddProduct = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    quantity: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear form after submission
    setFormData({
      name: '',
      brand: '',
      price: '',
      quantity: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className="container h-screen flex justify-center items-center w-1/2">
      <form onSubmit={handleSubmit} className='w-full'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-semibold text-gray-600">Brand</label>
          <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-600">Price</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-600">Quantity</label>
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-600">Image URL</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
