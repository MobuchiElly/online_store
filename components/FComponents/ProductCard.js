import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="p-2">
      <div className="shadow-md border border-gray-200 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 px-2 py-1">
          <div className="h-64 bg-slate-200">
              <Image
                src="/images/product.png"
                alt="product image"
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg p-1"
              />
          </div>
        </div>
        <div className="flex justify-center mt-4">
            <div className="border border-black w-[30vw] lg:w-[16vw] my-1"></div>
        </div>
        
        <div className="p-4">
          <h3 className="text-sm font-extralight mb-2">Designed by Feramo</h3>
          <p className="mb-2 font-bold">Men Trendy Casual Wear</p>

          <div className="flex justify-between items-center text-sm">
            <span className="text-lg font-bold mr-4">Variations: </span>
            <button className="border border-black w-12 mx-1">S</button>
            <button className="border border-black w-12 mx-1">M</button>
            <button className="border border-black w-12 mx-1">L</button>
            <button className="border border-black w-12 px-1 ml-1">XXL</button>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="text-lg font-bold">$50</span>
            <button className="bg-mainBg text-white py-1 px-3 rounded-lg text-semibold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
