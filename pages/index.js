import axios from "axios";
import ProductList from "@/components/FComponents/ProductList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { FadeLoader } from 'react-spinners';
import { useEffect, useState } from "react";
import Image from "next/image";
import Preloader from "@/components/Preloader";


const Index = ({ products, currentPage, totalPages }) => {
  const [searchValue, setSearchValue] = useState("");
  const [preloader, setPreloader] = useState(true);

  const router = useRouter();
  
  const handlePagination = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    if (newPage < 1 || newPage > totalPages) return;
    router.push({
      pathname: '/',
      query: { page: newPage, search: searchValue },
    });
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === '') {
      router.push("/");
    }
  }, [searchValue]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handlePagination(1);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  useEffect(() => {
    const preloaderTimeout = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(preloaderTimeout)
  }, []);

  const backgroundImage = "url('/images/bannerDesktop.png')";
  const bgImageStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
  };

  return (<div>
    
      <div className="min-h-40 flex flex-col flex-grow" style={{ minHeight: "calc(100vh - 20vh)" }}>
        <div className="bg-[#000000B2] py-4 px-3 lg:px-10 h-226px md:h-425px" style={bgImageStyle}>
          <div className="flex gap-4">
            <span className="w-3/4 relative">
              <input type="text" placeholder="Search Lapis" className="p-2 px-6 rounded-2xl w-full text-lg focus:bg-slate-50 opacity-90"
                value={searchValue} onChange={(e) => handleChange(e)} />
                <Image src='./images/search_black.svg' width='26' height='26' className="absolute right-2 top-2.5 opacity-70 p-1"/>
            </span>
            <span className="w-1/4">
              <button className="text-black opacity-80 font-semibold text-lg bg-white rounded-lg py-2 px-4 md:px-6 inline-flex shadow-md hover:scale-105 active:bg-slate-400"
                onClick={() => handlePagination(1)}>Search</button>
            </span>
          </div>
          <div className="min-h-[50vh] my-2 text-white text-3xl flex md:py-10 font-semibold font-sans">
            <div>
              <p className="my-3">FIND YOUR </p> <p className="my-3">TRUE <span className="font-serif text-4xl font-medium">STYLE</span></p> HERE
            </div>
          </div>
        </div>
        <div className="bg-[#000000E5] py-5 flex flex-col items-center h-[65px] lg:87px">
          <p className="text-white text-center font-extralight">Exclusive Mens Collection</p>
          <div className="border w-[60vw] lg:w-[40vw]"></div>
        </div>
        {products?.length > 0 ? <div className="px-3 lg:px-10 py-4">
          <div className="flex justify-center">
            <ProductList products={products} />
          </div>
          <div className="border-b border-black my-2 mb-4 shadow"></div>
          <div className="flex justify-center text-black">
            <button aria-label="Previous page" className="bg-[#f4f4f4] py-2 px-3 rounded-full font-bold font-mono mr-1 rotate-180"
              onClick={() => handlePagination(currentPage - 1)} disabled={currentPage <= 1}>
              <svg data-v-608d409f="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-608d409f="" d="M2.66667 8H13.3333M13.3333 8L9.33334 4M13.3333 8L9.33334 12" stroke="#0D1821" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <button aria-label="Current page" className="bg-[#c7d3f1] py-2 px-4 rounded-full font-bold font-mono mr-1"
              onClick={() => handlePagination(currentPage)}>
                {currentPage}
            </button>
            <button aria-label="Next page" className="bg-[#f3f3f3] py-2 px-3 rounded-full"
              onClick={() => handlePagination(currentPage + 1)} disabled={currentPage >= totalPages}>
              <svg data-v-608d409f="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-608d409f="" d="M2.66667 8H13.3333M13.3333 8L9.33334 4M13.3333 8L9.33334 12" stroke="#0D1821" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div>
        </div> :
        <div className="min-h-[60vh] py-16 space-y-2">
          <p className="text-center text-lg font-[500]">Oops!!</p>
          <p className="text-center text-lg font-[500] ">The search returned no products. Please refresh your browser</p>
        </div>
        }
      </div>
      {preloader && <Preloader />}
  </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const search = query.search || '';
  try {
    const res = await axios.get(`${process.env.ENDPOINT_URL}?page=${page}&size=${12}&search=${search}`);
    const data = await res.data.data;
    const total = await res.data.total;
    const totalPages = Math.ceil(total / 12);
    return {
      props: {
        products: data,
        currentPage: parseInt(page, 10),
        totalPages: totalPages || 1,
      },
    };

  } catch (error) {
    console.error("Error fetching data", error);
    return {
      props: {
        products: [],
        currentPage: parseInt(page, 10),
        totalPages: 1,
      },
    };
  }
};

export default Index;
