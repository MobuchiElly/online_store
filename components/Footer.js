import { useState } from "react"
import Image from "next/image"
import EmailSuccessModal from "./modals/EmailSuccessModal";
import EmailErrorModal from "./modals/EmailErrorModal";
import axios from "axios";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModalOpen, seterrorModalOpen] = useState(false);
  const [error, setError] = useState('');
  

  const handleSubscription = async (email) => {
    try {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(email)){
        setError("Please enter a valid email address");
        return;
      };
      const emailRes = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/email/subscribeemail`, {email});
      if (emailRes.status === 201){
        setSuccessModal(true);
        return;
      }
      seterrorModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='bg-[#0D1821] text-white'>
      {/* Top */}
      <div className="py-16 pl-8 pr-2 md:px-14">
        <div className='flex flex-col-reverse md:flex-row md:px-1 lg:px-16 md:space-y-0 h-full'>
          <div className='space-y-3 flex-1 mt-14 md:mt-0'>
            <div>
              <div className='uppercase font-bold text-base md:text-lg'>Contact us</div>
              <div className="h-[1px] w-16 mr-2 bg-mainBg"></div>
            </div>
            <div className="text-sm md:text-base font-[500]"><div className="inline-flex h-3 w-3 mr-2 border-2 border-[#FF7F50]"></div>08134923317</div>
            <div className="text-sm md:text-base font-[500]"><div className="inline-flex h-3 w-3 mr-2 border-2 border-[#FF7F50]"></div>Online store, Lagos Nigeria</div>
            <div className=''>
              <Image src="/assets/images/payment-types-imgs.png" alt="logo" height={120} width={160} className="mt-4 md:w-44"/>
            </div>
          </div>
          <div className='space-y-4 flex-1'>
            <div className="space-y-1">
              <div className='uppercase font-bold text-lg md:text-xl'>Sign up for discounts & updates</div>
              <div className='pr-8 md:pr-0'>
                <input type="text" placeholder="Enter your email address or phone number" className='rounded-md shadow-md outline-none border-0 w-full bg-white bg-opacity-20 px-4 py-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <button className='bg-layoutMainBg hover:bg-mainBg font-semibold md:font-bold md:text-xl transition duration-300 ease-in-out px-12 py-2 rounded outline-none shadow-md' onClick={() => handleSubscription(email)}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='bg-[#191919] text-center text-white text-opacity-80 text-base font-bold p-6 mt-4 md:mt-6'>
        Copyright 2023-2024 @Lapis Online Boutique. All Rights Reserved.
      </div>
      {successModal && <EmailSuccessModal closeModal={() => setSuccessModal(false)}/>}
      {errorModalOpen &&<EmailErrorModal closeModal={() => seterrorModalOpen(false)}/>}
    </div>
  )
}

export default Footer