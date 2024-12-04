import {FaArrowLeft, FaSpinner} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const SuccessModal = ({closeModal}) => {
  const [error, setError] = useState("");
  
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  }

  return (
    <div className="bg-white fixed inset-0 py-10 px-8 text-lg z-50 font-sans">
      <div className="flex p-1">
        <span className="my-1 w-1/12" onClick={handleClose}>
          <FaArrowLeft size={16}/>
        </span>
        <span className="w-11/12 text-center pr-10 text-xl font-bold">Payment</span>
      </div>

      <div className="h-full text-center flex items-center justify-center">
        <div className="w-full h-[60%] py-4">
          <div className="flex justify-center">
            <Image src="/images/successIcon.png" alt="" width="80" height="200"/>
          </div>
          <div className="flex justify-center items-center mt-8 font-semibold">
            Paid successfully
          </div>
          <div className="bg-layoutMainBg rounded-3xl mx-10 mt-20 p-2 text-black" onClick={() => setError("This feature would be available shortly after I have built the backend")}>
            Download Receipt
          </div>
          {
            error && <p className="text-red-600 font-medium font-serif py-2">{error}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default SuccessModal