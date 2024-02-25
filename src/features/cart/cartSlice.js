import { createSlice } from "@reduxjs/toolkit";
import products from '../../data/productsData'

const cartSlice = createSlice(
  {
    name: "cart",
    initialState: {
      cart:[],
      items: products,
      totalQuantity: 0,
      totalPrice: 0,
    },
    reducers: {
      addToCart(state, action){
        const productExist = state.cart.findIndex(item => item.id === action.payload.id)
        if (productExist >= 0) {
          state.cart[productExist].quantity += 1
        } else {
          return {...state, cart:[...state.cart, action.payload]}
        }
      },
      removeFromCart(state, action){
        const removedProduct = state.cart.filter(prod => prod.id !== action.payload)
        return {...state, cart:removedProduct}
      },
      getTotal (state, action) {
        const {totalQuantity, totalPrice} = state.cart.reduce(
          (cartTotal, cartItem) => {
            const {price, quantity} = cartItem
            const itemTotal = price * quantity
            cartTotal.totalPrice += itemTotal
            cartTotal.totalQuantity += quantity
            return cartTotal
          },{
            totalPrice: 0,
            totalQuantity: 0,
          }
        )
        state.totalPrice = totalPrice
        state.totalQuantity = totalQuantity
      },
      increaseItem(state, action) {
        state.cart = state.cart.map(item => {
          if (item.id === action.payload) {
            return {...item, quantity: item.quantity + 1}
          }
          return item
        })
      },
      decreaseItem(state, action) {
        state.cart = state.cart.map(item => {
          if (item.id === action.payload) {
            return {...item, quantity: item.quantity - 1}
          }
          return item
        })
      }
    }
  }
)

export const { addToCart, removeFromCart, getTotal, increaseItem, decreaseItem } = cartSlice.actions
export const cartReducer = cartSlice.reducer