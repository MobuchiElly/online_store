import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="p-2">
      <div className="shadow border border-gray-200 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 md:px-10 py-1">
          <div className="h-64 bg-gray-100">
              <Image
                src="/images/product.png"
                alt="product image"
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg p-1"
              />
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-4">
            <div className="border border-black w-[30vw] lg:w-[16vw] my-1"></div>
        </div>
        
        <div className="px-4">
          <h3 className="text-sm font-extralight mb-2">Designed by Feramo</h3>
          <p className="mb-2 font-bold">Men Trendy Casual Wear</p>

          <div className="flex justify-between items-center text-sm">
            <span className="text-lg font-bold mr-4">Variations: </span>
            <button className="border border-black w-12 mx-1 py-1">S</button>
            <button className="border border-black w-12 mx-1 py-1">M</button>
            <button className="border border-black w-12 mx-1 py-1">L</button>
            <button className="border border-black w-12 px-1 py-1 ml-1">XXL</button>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="text-lg font-bold">$50</span>
            <button className="bg-mainBg text-white py-2 px-3 rounded-lg text-semibold">Add to Cart</button>
          </div>
        </div>
        <p className="px-4 text-center py-2 text-sm">30 days money back guarantee</p>
      </div>
    </div>
  );
};

export default ProductCard;
