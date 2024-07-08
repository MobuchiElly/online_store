import Image from "next/image";

const CheckoutProductCard = () => {
  return (
    <div className="p-2 flex">
        {/* this is where i handled the image and its divs sizing so i can effect changes here */}
      <div className="rounded-lg overflow-hidden md:flex w-full md:w-[80%] lg:w-[90%]">
        <div className="relative w-full h-64 px-2 py-1 md:px-10 lg:px-20">
          <div className="h-64 bg-slate-100">
              <Image
                src="/images/product.png"
                alt="product image"
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg p-1"
              />
          </div>
        </div>

        <div className="p-4 border [w-10%] lg:flex lg:flex-col lg:justify-center ">
          <h3 className="text-sm font-extralight mb-2">Designed by Feramo</h3>
          <p className="mb-2 font-bold">Men Trendy Casual Wear</p>

          <div className="flex justify-between items-center text-sm">
            <span className="text-lg font-bold mr-4">Variations: </span>
            <button className="border border-black w-12 px-1 ml-1">XXL</button>
          </div>
          <div className="items-center my-2">
            <span className="text-lg font-bold">Price: $50</span>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <button className="py-2 px-3 rounded bg-red-600 text-white font-medium mr-8 text-sm">Remove</button>
            <div className="flex">
              <button className="border border-black px-3 py-1 mx-1">-</button>
              <span className="mx-3 text-lg font-bold pt-1">1</span>
              <button className="border border-black px-3 py-1 mx-1">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
