import React from 'react'
import Image from 'next/image';
import { FaYoutubeSquare,  FaStaylinked, FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaTwitter, FaTwitterSquare, FaCcVisa, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="h-auto min-h-20 bg-mainBg w-full bottom-0 font-bold p-9 text-lg">
      <div className="py-2 my-2"><Image src="/images/logo.png" width="140" height="120"/></div>
      <div className="flex gap-4">
        <div className="border w-1/2 py-2">
          <p className="py-1">Lapis Store International</p>
          <p className="py-1">Lagos Ikeja</p>
          <p className="py-1">Nigeria</p>
        </div>
        <div className="border w-1/2 px-10 md:px-0 py-2">
          <p className="py-1">About the club</p>
          <p className="py-1">Contact Us</p>
          <p className="py-1">More</p>
          <p className="py-1">FQA</p>
        </div>
      </div>
      <div className="w-full bg-black h-[0.5px] my-6 mx-1"></div>

      <ul className="flex justify-center border py-1">
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 lg:mb-1">
              <FaFacebook size={27}/>
            </span>
            <span className="hidden lg:block ml-2 p-2 font-mono">Facebook</span>
          </a>
        </li>
        
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-1">
              <FaInstagram size={27}/>
            </span>
            <span className="hidden lg:block ml-2 p-2 font-mono">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-1">
              <FaTwitter size={27} />
            </span>
            <span className="hidden lg:block ml-2 p-2 font-mono">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className=" inline-flex items-center pr-7">
            <span className="hover:scale-105 md:pr-4 lg:pr-0 lg:mb-2">
              <FaYoutube size={28}/>
            </span>
            <span className="hidden lg:block ml-2 p-2 font-mono">Youtube</span>
          </a>
        </li>
      </ul>      
      
      <span>
      <p className="text-center">&copy; <span className="font-mono py-1">{new Date().getFullYear()}</span> Lapis Store International.<span className='ml-2 font-mono'>All Rights Reserved.</span></p>
      </span>
    </div>
  )
}

export default Footer