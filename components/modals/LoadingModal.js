import { FaArrowLeft } from "react-icons/fa";
import ReactLoading from "react-loading";

const LoadingModal = ({ closeModal }) => {
  return (
    <div className="bg-slate-50 fixed inset-0 py-10 px-8 text-lg z-50 font-sans">
      <div className="flex p-1 relative">
        <span className="absolute left-6 top-3 text-gray-400">
          <FaArrowLeft size={16} />
        </span>
        <h1 className="w-full lg:pl-10 text-center lg:text-justify pr-10 text-xl lg:text-lg font-[600] lg:font-[500]">Payment</h1>
      </div>
      <div className="h-full text-center flex flex-col justify-center">
        <div className="h-[75%] lg:h-[60%]">
          <div className="flex justify-center items-center my-12">
            <ReactLoading type="spin" color="#000" height={60} width={60} />
          </div>
          <p className="font-serif">Payment processing...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;