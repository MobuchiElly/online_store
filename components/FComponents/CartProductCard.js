import Image from "next/image";
import { useRouter } from "next/router";

const CheckoutProductCard = ({product}) => {
  const router = useRouter();

  const handleAddCart = () => {
    router.push("/shop/cart");
  }

  return (
    <div className="md:px-2 py-2 flex">
      <div className="rounded-lg overflow-hidden flex w-full md:w-[80%] lg:w-[90%]">
        <div className="relative w-2/5 h-64 pl-2 py-1 md:px-10 lg:px-20">
          <div className="h-64 bg-slate-100">
              <Image
                src={product.url}
                alt="product image"
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg p-1"
              />
          </div>
        </div>

        <div className="pt-10 md:pt-5 px-1 md:px-4 md:p-4 border w-2/4 lg:flex lg:flex-col lg:justify-center ">
          <h3 className="text-sm font-extralight mb-2">Designed by Feramo</h3>
          <p className="mb-2 font-bold">{product.name}</p>

          <div className="flex justify-between items-center text-sm">
            <span className="text-lg font-bold mr-4">Variations: </span>
            <button className="border border-black w-12 mx-1 py-1">S</button>
            <button className="border border-black w-12 mx-1 py-1">M</button>
            <button className="border border-black w-12 mx-1 py-1">L</button>
            <button className="border border-black w-12 px-1 ml-1 py-1">XXL</button>
          </div>
          <div className="items-center my-2">
            <span className="text-lg font-bold">Price: {product.price}</span>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <button className="py-2 px-3 rounded-2xl border border-gray-700 text-layoutMainBg font-medium mr-8 text-sm hover:scale-105">Delete</button>
            <div className="flex">
              <button className="border border-black px-3 py-1 mx-1 hover:scale-105">-</button>
              <span className="mx-3 text-lg font-bold pt-1">1</span>
              <button className="border border-black hover:scale-105 px-3 py-1 mx-1">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
