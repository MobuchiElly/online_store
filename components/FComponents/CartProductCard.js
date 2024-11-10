import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "@/utils/redux/features/cartSlice";

const CheckoutProductCard = ({product}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector(state => state.lapiscart);
  const [quantity, setQuantity] = useState(product?.quantity);

  //const [activeSize, setActiveSize] = useState(1);
  const handleQuantity = (val, quantity) => {
   if(val === "add"){
      setQuantity((quantity) => quantity + 1);
   } else if (val === "sub"){
      if(quantity > 1){
        setQuantity((quantity) => quantity - 1);
      }
   }
  };
  const handleAddCart = () => {
    router.push("/shop/cart");
  }

  const handleDelItem = (id) => {
    dispatch(removeItem({id}));
  }

  return (
    <div className="lg:px-2 py-2 flex justify-center">
      {
        product && 
        <div className="rounded-lg overflow-hidden flex w-full border border-opacity-90 md:w-[80%] lg:w-[90%] space-x-1 md:space-x-10" id={product._id}>

        <div className="flex flex-col items-center justify-center relative lg:w-1/4">
          <div className="h-auto">
              {product && <Image
                src={product?.images[0]?.url}
                alt="product image"
                height={100}
                width={200}
                objectFit="cover"
                className="object-cover lg:w-60 rounded-t-lg p-1"
              />}
          </div>
          <div className="md:hidden flex justify-center">
            <button className="py-2 px-3 rounded-2xl border border-gray-700 text-mainBg font-[600] text-sm hover:scale-105 z-10" onClick={() => handleDelItem(product._id)}>Delete</button>
          </div>
        </div>
                {/* Product details section */}
        <div className="flex flex-col justify-center space-y-2 lg:space-y-3">
          <p className="font-bold">{product.title}</p>
          <div className="text-sm">
            <p className="text-base font-[600] mb-1">Sizes:</p>
            {
              product.sizes.map((size, index) => (
                <button className="border border-black border-opacity-40 font-semibold rounded-lg w-12 mr-1 py-1" id={index}>{size}</button>
              ))
            }
          </div>
          <div className="flex items-center">
            <p className="text-2xl lg:text-right font-[600]">
              <span className="hidden lg:inline-flex mr-2 text-lg">Price: </span>{product.price * quantity}</p>
          </div>
          <p className="lg:hidden">Few units in stock</p>
          <div className="flex items-center font-semibold">
            <button className="hidden md:block py-2 px-3 rounded-2xl border border-gray-700 lg:border-gray-500 border-opacity-90 text-maainBg font-[700] mr-6 text-sm text-mainBg" onClick={()=> handleDelItem(product._id)}>Delete</button>
            <div className="flex">
              <button className="border border-black border-opacity-30 font-bold text-lg rounded-lg w-12 py-1" onClick={() => handleQuantity("sub", quantity)}>-</button>
              <span className="text-xl font-bold pt-1 bg-slate-200 px-4">{quantity}</span>
              <button className="border border-black border-opacity-30 font-bold rounded-lg text-lg w-12 py-1" onClick={() => handleQuantity("add", quantity)}>+</button>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default CheckoutProductCard;
