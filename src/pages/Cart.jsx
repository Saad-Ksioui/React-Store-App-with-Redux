import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem, getTotal, increaseItem, removeFromCart } from '../features/cart/cartSlice'

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotal())
  }, [cart])
  return (
    <div className="container mx-auto mt-5">
      <div className="flex my-5">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          {
            cart?.map(c=>(
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5"> {/* product */}
              <div className="w-20">
                <img className="h-24" src={c.image} alt={c.name} />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{c.name}</span>
                <span className="text-red-500 text-xs">{c.brand}</span>
                <button onClick={()=>dispatch(removeFromCart(c.id))} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <button className="fill-current text-gray-600 w-3" onClick={()=>dispatch(decreaseItem(c.id))}>
                -
              </button>
              <label className="mx-2 border text-center w-8">{c.quantity}</label>
              <button className="fill-current text-gray-600 w-3" onClick={()=>dispatch(increaseItem(c.id))}>
                +
              </button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">${c.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${c.price * c.quantity}</span>
          </div>
            ))
          }
          {cart.length === 0 ? (
            <a href="/products" className="flex font-semibold text-blue-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-blue-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Go Shopping
          </a>
          ) : (
            <a href="/products" className="flex font-semibold text-blue-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-blue-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </a>
          )}
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {totalQuantity}</span>
            <span className="font-semibold text-sm">{totalPrice}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${cart.length === 0 ?  '0' : totalPrice + 10}</span>
            </div>
            <button className="bg-blue-500 font-semibold hover:bg-blue-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart