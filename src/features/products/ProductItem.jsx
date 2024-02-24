/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";


const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden">
      <img className="w-full h-48 object-contain object-center" src={product.image} alt={product.name} />
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <p className="text-xs text-gray-500">Brand: {product.brand}</p>
        <p className="text-lg font-bold text-gray-700">${product.price}</p>
        <div className="flex justify-between mt-4">
          <button onClick={() => dispatch(addToCart(product))} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add to Cart
          </button>
          <button onClick={() => onDelete(product.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
