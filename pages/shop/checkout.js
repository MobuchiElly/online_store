import React from 'react';

const Checkout = () => {
  return (
    <div className="bg-slate-50 pt-2 pb-10 px-2" style={{minHeight: "calc(100vh - 20vh)"}}>
      <section className="p-2"><h1 className="font-bold text-2xl px-12">Checkout</h1></section>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-[92%] flex border">
          <main className="w-3/5 border border-black">
            <section className="lg:my-1 lg:shadow bg-white p-2">
              <h1 className="font-semibold text-lg inline-flex">Billing Information</h1>
              <p>Please provide accurate address to help us serve you better</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="Lagos">Lagos</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Kano">Kano</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Address</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Pickup Station</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="Unilag">Unilag</option>
                    <option value="Bus Terminal">Bus Terminal</option>
                    <option value="Landmark 1">Landmark 1</option>
                    <option value="Landmark 2">Landmark 2</option>
                    <option value="Landmark 3">Landmark 3</option>
                    <option value="Landmark 4">Landmark 4</option>
                  </select>
                </div>
              </form>
            </section>
            <section className="lg:my-1 lg:shadow bg-white p-2">
              <div>
                <h1 className="font-semibold text-lg inline-flex">Payment Method</h1>
                <span className="ml-4">Secure connection</span>
              </div>
              <div className="space-x-4">
                <span>MasterCard</span>
                <span>Verve</span>
                <span>VISA</span>
              </div>
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name on card</label>
                  <input
                    type="text"
                    placeholder="Michael Collins"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    placeholder="4232 4211 6731 0027"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input
                      type="text"
                      placeholder="034"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </form>
            </section>
            <section className="flex justify-around lg:my-1 lg:shadow bg-white p-2 py-4">
              <span className="bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer">Pay</span>
              <span className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">Cash On Delivery</span>
              <span className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">Other Payment Methods</span>
            </section>
          </main>
          <aside className="w-2/5 border border-black">
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Checkout;