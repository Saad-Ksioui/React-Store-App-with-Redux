import products from '../../productsData'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-5 gap-6">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList