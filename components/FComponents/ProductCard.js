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
    console.log('successfully added item to cart');
    router.push("/shop/cart");
  }

  return (
    <div className="p-2 w-full">
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
        <div className="hidden md:flex justify-center my-2">
            <div className="border border-black w-[30vw] lg:w-[16vw] my-1"></div>
        </div>
        
        <div className="px-4">
          <p className="mb-2 font-semibold">{product.title}</p>
          <div className="hidden justify-between items-center text-sm">
            <span className="text-lg font-bold mr-4">Variations: </span>
            <button className="border border-black w-12 mx-1 py-1">S</button>
            <button className="border border-black w-12 mx-1 py-1">M</button>
            <button className="border border-black w-12 mx-1 py-1">L</button>
            <button className="border border-black w-12 px-1 py-1 ml-1">XXL</button>
          </div>
          <div className="flex flex-col my-2 space-y-4 action-spot">
            <span className="text-lg font-bold">&#8358;{product.price}</span>
            <button className="text-[#ff7f55] border border-mainBg hover:text-white hover:bg-mainBg py-3 px-3 rounded-lg font-bold text-lg" onClick={(e) => handleAddCart(e)}>Add to Cart</button>
          </div>
        </div>
        <p className="px-4 text-center py-2 text-sm">30 days money back guarantee</p>
      </Link>
    </div>
  );
};

export default ProductCard;
