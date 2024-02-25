import { createSlice } from "@reduxjs/toolkit";
import product from '../../productsData'

const productSlice = createSlice(
  {
    name: "product",
    initialState: {
      Product: product
    },
    reducers: {
      addProducts (state, action) {
        const addProduct = [...state.Product, action.payload]
        return {...state, Product:addProduct}
      },
      deleteProducts (state, action) {
        const deleteProduct = state.Product.filter(prod => prod.id !== action.payload)
        return {...state, Product:deleteProduct}
      }
    }
  }
)

export const {addProducts, deleteProducts} = productSlice.actions
export const productReducer = productSlice.reducer