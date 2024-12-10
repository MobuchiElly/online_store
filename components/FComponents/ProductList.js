import ProductCard from "./ProductCard"
const ProductList = ({products}) => {

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 md:hidden lg:grid lg:grid-cols-5 gap-2 w-full lg:w-[88%] pt-4 mb-10">
        {
          products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))
        }
      </div>
      <div className="hidden md:grid grid-cols-3 md:gap-6 md:px-2 lg:hidden">
        {
          products.slice(0,9).map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList