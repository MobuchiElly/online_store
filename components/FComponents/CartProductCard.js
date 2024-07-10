import Image from "next/image";
import { useRouter } from "next/router";

const CheckoutProductCard = ({product}) => {
  const router = useRouter();

  const handleAddCart = () => {
    router.push("/shop/cart");
  }

  return (
    <div className="lg:px-2 py-2 flex">
      <div className="rounded-lg overflow-hidden flex w-full border md:w-[80%] lg:w-[90%]">
        <div className="flex flex-col lg:block relative w-2/5 h-64 pl-2 py-1 md:px-10 lg:px-20">
          <div className="h-64 bg-slate-50">
              <Image
                src={product.url}
                alt="product image"
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg p-1"
              />
          </div>
          <div className="md:hidden flex pl-10">
            <button className="py-2 px-3 rounded-2xl border border-gray-700 lg:border-gray-500 text-mainBg lg:text-black lg:bg-white font-semibold mr-8 text-sm hover:scale-105">Delete</button>
          </div>
        </div>

        <div className="pt-10 md:pt-5 px-1 md:px-4 md:p-4 w-3/5 lg:flex lg:flex-col lg:justify-center space-y-2 lg:space-y-3">
          <h3 className="text-sm font-extralight mb-2">Designed by Feramo</h3>
          <p className="mb-2 font-bold">{product.name}</p>

          <div className="text-sm">
            <p className="text-base font-bold md:mr-4 pl-2">Variation:</p>
            <button className="border border-black mx-1 p-1 md:px-3  md:mx-2">S</button>
            <button className="border border-black  mx-1 p-1">M</button>
            <button className="mx-1 px-3 py-2 md:px-3 md:mx-2 bg-mainBg text-white">L</button>
            <button className="border border-black p-1 ml-1 py-1 md:px-3  md:mx-2">XL</button>
            <button className="border border-black p-1 ml-1 py-1 md:px-3  md:mx-2">XXL</button>
          </div>
          <div className="flex items-center my-2 lg:justify-end">
            <p className="text-2xl font-bold lg:text-right pr-14 lg:pr-6 lg:flex">
              <span className="hidden lg:block mr-2 font-semibold text-lg pt-1">Price: </span>{product.price}</p>
          </div>
          <p className="lg:hidden">Few units in stock</p>
          <div className="flex justify-between items-center font-semibold">
            <button className="hidden md:block py-2 px-3 rounded-2xl border border-gray-700 lg:border-gray-500 text-layoutMainBg lg:text-black lg:bg-white font-medium mr-8 text-sm hover:scale-105">Delete</button>
            <div className="flex">
              <button className="border border-black px-3 py-1 mx-2 hover:scale-105 bg-mainBg">-</button>
              <span className="mx-4 text-lg font-bold pt-1">1</span>
              <button className="border border-black hover:scale-105 px-3 py-1 mx-2 bg-mainBg">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
