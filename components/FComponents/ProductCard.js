import {useState, useEffect} from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { addItem } from "@/utils/redux/features/cartSlice";

const ProductCard = ({product}) => {
  const [price, setPrice] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const productId = product._id;

  const handleAddCart = (e) => {
    e.preventDefault();
    dispatch(addItem({...product, quantity}));
    //router.push("/shop/cart");
  }

  return (
    <div className="py-2 w-full">
      <Link href={"/products/" + productId} className="shadow-lg border border-gray-200 rounded-xl flex flex-col flex-1">
        <div className="relative w-full bg-slate-100 bg-opacity-5">
          <div className="h-auto">
              <Image
                src={product?.images[0]?.url}
                alt={product?.images[0]?.altText}
                width="100" height="100"
                objectFit="cover"
                className="w-full flex-1 object-cover h-auto"
              />
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-2">
            <div className="border border-black w-[30vw] lg:w-[16vw] my-1"></div>
        </div>
        
        <div className="px-2 text-gray-700 space-y-1">
          <p className="text-[12px] my-1">{product.title}</p>
          <div className="hidden lg:block space-x-1 text-[10px]">
            <button className="border border-black border-opacity-30 w-8 py-1 rounded font-[500] text-gray-600">S</button>
            <button className="border border-black border-opacity-30 w-8 py-1 rounded font-[500] text-gray-600">M</button>
            <button className="border border-black border-opacity-30 w-8 py-1 rounded font-[500] text-gray-600">L</button>
            <button className="border border-black border-opacity-30 w-8 py-1 rounded font-[500] text-gray-600 ml-1">XL</button>
          </div>
          <div className="space-y-4">
            <p className="text-black font-[500] text-[16px] lg:mt-2">&#8358;{product.price}</p>
            <button className="text-[#ff7f55] border border-mainBg hover:text-white hover:bg-mainBg py-3 px-3 rounded-lg font-bold text-[13px] w-full mt-4 mb-1" onClick={(e) => handleAddCart(e)}>Add to Cart</button>
          </div>
        </div>
        <p className="text-gray-700 px-4 text-center py-2 text-[10px]">30 days money back guarantee</p>
      </Link>
    </div>
  );
};

export default ProductCard;
