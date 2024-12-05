import ProductCard from "./ProductCard"
const ProductList = ({products}) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 w-full lg:w-[86%] md:px-2 pt-4 mb-10">
      {
        products.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))
      }
    </div>
  )
}

export default ProductList