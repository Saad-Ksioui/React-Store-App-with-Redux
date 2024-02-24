import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Header = () => {
  const {cart} = useSelector(state => state.cart)
  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Redux Toolkit Store App</h1>
        <nav className="mr-2">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/products" className="hover:text-gray-300">Products</a></li>
            <li><a href="/products" className="hover:text-gray-300">Add Product</a></li>
            <li className="relative">
              <Link to="/cart" className=" hover:text-gray-300">Cart</Link>
              {
                cart.length > 0 && (
                  <span className="absolute bottom-3 bg-black text-white left-5 px-2 rounded-full">{cart.length}</span>
                )
              }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header