import {FaArrowLeft, FaSpinner} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const SuccessModal = ({closeModal}) => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-white py-6 px-3 lg:py-12">
      <div className="w-full md:w-[70%] bg-white text-lg z-50 font-sans space-y-16 lg:space-y-20">
        <div className="relative">
          <div className="absolute top-3 hover:scale-105" onClick={handleClose}>
            <FaArrowLeft size={16}/>
          </div>
          <h1 className="w-full text-center lg:text-justify text-xl lg:text-lg pr-4 lg:pr-0 lg:pl-6 pb-3 pt-1 font-[600] lg:font-[500]">Payment</h1>
        </div>
        <div className="flex justify-center">
          <Image src="/images/successIcon.png" alt="" width="80" height="200"/>
        </div>
        <div className="flex justify-center items-center font-[400]">
          Paid successfully
        </div>
        <div className="flex justify-center items-center">
          <button className="text-center font-[600] w-full lg:w-auto bg-layoutMainBg hover:bg-opacity-90 rounded-3xl p-2 lg:px-20">Download Receipt</button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal