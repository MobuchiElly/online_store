import {FaArrowLeft, FaSpinner} from "react-icons/fa";


const SuccessModal = ({closeModal}) => {
  return (
    <div className="bg-white fixed inset-0 py-10 px-8 font-bold text-lg">
      <div className="border border-black flex p-1">
        <span className="my-1 w-1/12" onClick={closeModal}>
          <FaArrowLeft size={16} className="border border-black"/>
        </span>
        <span className="w-11/12 border border-red-600 text-center pr-10">Payment</span>
      </div>

      <div className="border border-green-600 h-full text-center flex flex-col">
        <div className="my-36">
          <div className="flex justify-center">
            <div className="border border-mainBg h-14 w-14 rounded-full">
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            Paid successfully
          </div>
          <div className="bg-mainBg rounded-3xl mx-10 mt-20 p-2">
            Download Receipt
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal