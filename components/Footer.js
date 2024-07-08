import React from 'react'
import Image from 'next/image';
import { FaYoutubeSquare,  FaStaylinked, FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaTwitter, FaTwitterSquare, FaCcVisa, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="h-auto min-h-20 bg-mainBg font-sans font-semibold w-full bottom-0 px-3 py-3 lg:p-9 text-xl text-white">
      <div className="py-2 my-2 px-5 md:px-0"><Image src="/images/logo.png" width="140" height="120"/></div>
      <div className="w-full md:flex md:gap-2 px-5 md:px-0">
        <div className="md:w-2/5 md:py-2">
          <p className="mb-2 mt-1">Lapis Store International</p>
          <p className="">Lagos Ikeja</p>
          <p className="py-1">Nigeria</p>
        </div>
        <div className="md:w-2/5 md:px-0 md:py-2">
          <span className="mb-2 mt-1">About the club</span>
          <p className="py-1">Contact Us</p>
          <p className="py-1">More</p>
          <p className="py-1">FQA</p>
        </div>
        {/* Desktop */}
        <ul className="hidden md:flex lg:flex-col justify-center py-1 1/5">
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 lg:mb-1">
              <FaFacebook size={27}/>
            </span>
            <span className="hidden lg:block ml-2 mb-2 p-1 ">Facebook</span>
          </a>
        </li>
        
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-1">
              <FaInstagram size={27}/>
            </span>
            <span className="hidden lg:block ml-2 mb-2 p-1 ">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-1">
              <FaTwitter size={27} />
            </span>
            <span className="hidden lg:block ml-2 mb-2 p-1 ">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-2">
              <FaYoutube size={28}/>
            </span>
            <span className="hidden lg:block ml-2 mb-2 p-1 ">Youtube</span>
          </a>
        </li>
        </ul> 
      </div>

      <div className="w-full bg-slate-200 h-[0.5px] my-4 md:my-6 mx-1"></div>
      {/* Mobile */}
      <ul className="flex md:hidden justify-center py-1">
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 lg:mb-1">
              <FaFacebook size={27}/>
            </span>
          </a>
        </li>
        
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-1">
              <FaInstagram size={27}/>
            </span>
          </a>
        </li>
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-1">
              <FaTwitter size={27} />
            </span>
          </a>
        </li>
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-2">
              <FaYoutube size={28}/>
            </span>
          </a>
        </li>
      </ul>      
      <span>
      <p className="text-center">&copy; <span className="">{new Date().getFullYear()}</span> Lapis Store International.<span className='ml-2 block md:inline-flex'>All Rights Reserved.</span></p>
      </span>
    </div>
  )
}

export default Footer