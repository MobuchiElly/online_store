import Image from "next/image";

const EmailErrorModal = ({closeModal}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4'>
        <div className='bg-white relative flex flex-col items-center space-y-4 px-8 py-6 text-slate-800 rounded-xl md:w-[50%] lg:w-[40%]'>
            <span className='absolute right-6 top-4 font-[500]'>
              <Image src="/assets/images/close-icon.svg" height={20} width={25} onClick={closeModal} />
            </span>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Image src="/assets/images/danger-icon.svg" height={50} width={55}/>
              </div>
              <h1 className="text-gray-800 text-[26px] font-[600]">You're on the list!</h1>
            </div>
            <p className="text-center text-[16px] font-[500] text-gray-700">You are already subscribed to this newsletter.</p>
            <div className="w-full pt-4">
                <button className='bg-layoutMainBg text-white w-full py-4 rounded-xl font-[500] text-opacity-95' onClick={closeModal}>Continue Shopping</button>
            </div>
        </div>
    </div>
  )
}

export default EmailErrorModal;