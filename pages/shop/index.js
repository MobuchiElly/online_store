import ProductList from "@/components/FComponents/ProductList";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import products from "@/utils/products";

const Shop = () => {
  const backgroundImage = "url('/images/bannerDesktop.png')";
    const bgImageStyle = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
      } 
  return (
    <div className="" style={{ minHeight: "calc(100vh - 20vh)" }}>

      <div className="bg-[#000000B2] min-h-[62vh] py-2 px-3 lg:px-10"
        style={bgImageStyle}
      >
        <div className="flex gap-4 ">
            <span className="w-3/4 "><input type="text" placeholder="Search Lapis" className="p-2 rounded-lg w-full text-lg"/></span>
            <span className="w-1/4"><button className="text-black font-semibold text-lg bg-white rounded-lg py-2 px-4 md:px-6 inline-flex">Search</button></span>
        </div>
        <div className="min-h-[50vh] my-2 text-white text-3xl flex py-10 font-semibold font-sans">
            <div>
              <p className="my-3">FIND YOUR</p> <p className="my-3">TRUE <span className="font-serif text-4xl font-medium">STYLE</span></p> HERE
            </div>
        </div>
      </div>

      <div className="bg-[#000000E5] py-4 flex flex-col items-center">
        <p className="text-white text-center font-extralight">Exclusive Mens Collection</p>
        <div className="border w-[60vw] lg:w-[40vw]"></div>
      </div>

      <div className="px-3 lg:px-10 py-4">
        <div className="">
          <ProductList products={products}/>
        </div>
        <div className="hidden justify-center">
          <button className="bg-mainBg py-2 px-4 text-xl font-bold font-mono mr-1">1</button>
          <button className="bg-mainBg py-2 px-4 text-xl font-bold font-mono mr-1">2</button>
          <button className="bg-mainBg py-1 px-3 text-xl font-bold font-mono">
          <FaArrowRight size={16} className=""/>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Shop;
