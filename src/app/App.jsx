import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import ProductList from "../pages/ProductList"
import Cart from "../pages/Cart"
import Home from "../pages/Home"
import AddProduct from "../pages/AddProduct"


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/products/add" element={<AddProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App