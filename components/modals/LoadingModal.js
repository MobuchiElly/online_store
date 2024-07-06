import {FaArrowLeft, FaSpinner} from "react-icons/fa";


const LoadingModal = ({closeModal}) => {
  return (
    <div className="bg-white fixed inset-0 py-10 px-8 font-bold text-lg">
      <div className="border border-black flex p-1">
        <span className="my-1 w-1/12" onClick={closeModal}>
          <FaArrowLeft size={16} className="border border-black"/>
        </span>
        <span className="w-11/12 border border-red-600 text-center pr-10">Payment</span>
      </div>
      <div className="border border-green-600 h-full text-center flex flex-col justify-center">
        <p>Processing</p>
        <div className="flex justify-center items-center my-12">
          <FaSpinner size={60}/>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal