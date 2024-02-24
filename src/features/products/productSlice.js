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
      },
      updateProducts (state, action) {
        const updateProduct = state.Product.find(prod => prod.id === action.payload.id)
        if (updateProduct) {
          updateProduct.name = action.payload.name
          updateProduct.brand = action.payload.brand
          updateProduct.price = action.payload.price
          updateProduct.description = action.payload.description
          updateProduct.image = action.payload.image
        }
      }
    }
  }
)

export const {addProducts, deleteProducts, updateProducts} = productSlice.actions
export const productReducer = productSlice.reducer