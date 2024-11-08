import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0D1821] text-white border p-8'>
      {/* Top */}
      <div className='lg:flex lg:flex-row-reverse border h-full space-y-8'>
      <div className='border space-y-3 my-2'>
          <div className='uppercase font-bold text-lg'>Sign up for discounts and updates</div>
          <div className='pr-8'>
            <input type="text" className='rounded-lg outline-none border-0 w-full bg-white bg-opacity-20 p-4'/>
          </div>
          <button className='bg-layoutMainBg px-6 py-2 rounded'>Subscribe</button>
        </div>
        <div className='border space-y-2'>
          <div className='uppercase'>Contact us</div>
          <div>08134923317</div>
          <div>Online store, Lagos Nigeria</div>
          <div className=''>
            <span><image src="/images/mastercard.png"/></span>
            <span><image src="visa-logo.png"/></span>
            <span><image src="verve.png"/></span>
          </div>
        </div>
      </div>
      
      <div className='border'>
        (c)Lapis Boutique
      </div>
    </div>
  )
}

export default Footer