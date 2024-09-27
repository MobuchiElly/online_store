import axios from "axios";
import ProductList from "@/components/FComponents/ProductList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { current } from "@reduxjs/toolkit";
import {fadeLoader} from 'react-spinners';

const Index = ({products, currentPage, totalPages}) => {
  const router = useRouter();
  const handlePagination = (newPage) => {
    router.push({
      pathname: '/',
      query: { page: newPage}
    })
  }

  const backgroundImage = "url('/images/bannerDesktop.png')";
    const bgImageStyle = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
      } 

  return (
    <div className="min-h-40" style={{ minHeight: "calc(100vh - 20vh)" }}>

      <div className="bg-[#000000B2] h- py-2 px-3 lg:px-10 h-226px md:h-425px"
        style={bgImageStyle}
      >
        <div className="flex gap-4 ">
            <span className="w-3/4 "><input type="text" placeholder="Search Lapis" className="p-2 rounded-lg w-full text-lg"/></span>
            <span className="w-1/4"><button className="text-black font-semibold text-lg bg-white rounded-lg py-2 px-4 md:px-6 inline-flex">Search</button></span>
        </div>
        <div className="min-h-[50vh] my-2 text-white text-3xl flex md:py-10 font-semibold font-sans">
            <div>
              <p className="my-3">FIND YOUR</p> <p className="my-3">TRUE <span className="font-serif text-4xl font-medium">STYLE</span></p> HERE
            </div>
        </div>
      </div>

      <div className="bg-[#000000E5] py-4 flex flex-col items-center h-57px lg:87px">
        <p className="text-white text-center font-extralight">Exclusive Mens Collection</p>
        <div className="border w-[60vw] lg:w-[40vw]"></div>
      </div>
      
      <div className="px-3 lg:px-10 py-4">
        <div className="">
          <ProductList products={products}/>
        </div>
        <div className="border-b border-black my-2 mb-4 shadow"></div>
        <div className="flex justify-center text-black">
          <button className="bg-mainBg py-2 px-4 rounded font-bold font-mono mr-1 hover:scale-105" onClick={() => handlePagination(currentPage - 1)} disabled={currentPage <= 1}>
            <FaArrowLeft size={14}/>
          </button>
          <button className="bg-mainBg py-2 px-4 rounded font-bold font-mono mr-1 hover:scale-105" onClick={() => handlePagination(currentPage)}>{currentPage}</button>
          <button className="bg-mainBg hover:scale-105 py-2 px-4 rounded font-bold font-mono" onClick={() => handlePagination(currentPage + 1)} disabled={currentPage >= totalPages}>
          <FaArrowRight size={14}/>
          </button>
        </div>
      </div>
      <div>

      </div>      
    </div>
  );
};

export default Index;


export const getServerSideProps = async ({query}) => {
  const page = query.page || 1;
  try {
      const res = await axios.get(`${process.env.ENDPOINT_URL}`);
      const data = await res.data.data;
      const total = await res.data.total;
      const totalPages = Math.ceil(total/8);
      return {
          props: {
              products: data,
              currentPage: parseInt(page, 10),
              totalPages: totalPages,
          },
      };
  } catch (error) {
      console.error("Error fetching data", error);
      return {
          props: {
              products: [],
              currentPage: parseInt(page, 10),
          },
      };
  }
};
