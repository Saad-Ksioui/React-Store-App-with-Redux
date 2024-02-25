import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProducts } from '../features/products/productSlice';

const AddProduct = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const product = useSelector(state => state.product)
  const indexProduct = product.length
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !brand || !price || !description || !image) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(addProducts({
      id: indexProduct + 1,
      name: name,
      brand: brand,
      price: parseInt(price),
      quantity: 1,
      description: description,
      image: image
    }))
    navigate('/products')
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">Add Product</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-semibold text-gray-600">Brand</label>
          <input type="text" id="brand" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-600">Price</label>
          <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
          <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-600">Image URL</label>
          <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
