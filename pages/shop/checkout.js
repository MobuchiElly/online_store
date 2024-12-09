import Image from"next/image";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import LoadingModal from '@/components/modals/LoadingModal';
import SuccessModal from '@/components/modals/SuccessModal';
import { clearCart } from "@/utils/redux/features/cartSlice";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [stateOfResidence, setStateOfResidence] = useState("");
  const [address, setAddress] = useState("");
  const [pickupStation, setPickupStation] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const cart = useSelector(state => state.lapiscart);
  const dispatch = useDispatch();

  const checkInput = () => {
    if (!stateOfResidence) {
      setError("State is required.");
      return;
    }
    if (!address) {
      setError("Full Address is required.");
      return;
    }
    if (!pickupStation) {
      setError("Pickup Station is required.");
      return;
    }
    if (!nameOnCard) {
      setError("Name on Card is required.");
      return;
    }
    if (!cardNumber) {
      setError("Card Number is required.");
      return;
    }
    if (!expiryDate) {
      setError("Expiry Date is required.");
      return;
    }
    if (!cvv) {
      setError("CVV is required.");
      return;
    }
    setError("")
    return true;
  };

  const handleCheckout = () => {
    if (checkInput()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(clearCart());
        setSuccess(true);
      }, 900);
    }
  };

  return (
    <div className="bg-white lg:bg-slate-50 pt-2 pb-10 px-2" style={{minHeight: "calc(100vh - 20vh)"}}>
      <section className="p-2 flex justify-center">
        <h1 className="font-extrabold text-2xl lg:w-[92%] w-full md:text-center lg:text-justify">Complete Checkout</h1>
      </section>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-[92%] lg:flex gap-2">
          <main className="lg:w-3/5">
            <section className="lg:my-1 lg:shadow bg-white px-6 py-3 lg:py-6 rounded-md">
              <h1 className="font-semibold text-xl inline-flex">Billing Information</h1>
              <p className="text-sm py-2">Please provide accurate address to help us serve you better</p>
              <form className="space-y-4 mt-3 mb-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">State</label>
                  <select
                    className="p-2 py-3 mt-1 block w-full rounded border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    value={stateOfResidence}
                    onChange={(e) => { setStateOfResidence(e.target.value)
                    setError('');
                    }}
                  >
                    <option value="">Select State</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Kano">Kano</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Full Address</label>
                  <input
                    type="text" placeholder="No 12 Amadu Belo way Idumota"
                    className="mt-1 block w-full rounded p-2 py-2 border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value)
                    setError('');
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Select Pickup Station</label>
                  <select
                    className="mt-1 block w-full rounded p-2 py-3 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={pickupStation}
                    onChange={(e) => { setPickupStation(e.target.value)
                    setError('');
                    }}
                  >
                    <option value="">Select Pickup Station</option>
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
  
            <section className="lg:my-3 lg:shadow bg-white px-6 py-3 lg:py-6 rounded-md">
              <div>
                <h1 className="font-semibold text-lg inline-flex mr-2">Payment Method</h1>
                <span className="ml-6 text-sm">Secure connection</span>
              </div>
              <div className="space-x-8 my-3">
                <span>
                  <Image src="/images/mastercard.png" alt="" height="50" width="35" className="inline-flex"/>
                  <span className="text-sm font-bold text-blue-950 mt-5 ml-1">MasterCard</span>
                </span>
                <span>
                  <Image src="/images/verve.png" alt="" height="50" width="30" className="inline-flex"/>
                  <span className="text-sm font-bold text-blue-950 pt-2 ml-2">Verve</span>
                </span>
                <span>
                  <Image src="/images/visa-logo.png" alt="" height="50" width="30" className="inline-flex"/>
                </span>
              </div>
              <form className="space-y-4 mt-5 mb-3">
                <div>
                  <label className="block text-base text-slate-700 font-semibold">Name on card</label>
                  <input
                    type="text"
                    placeholder="Michael Collins"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 py-3 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    value={nameOnCard}
                    onChange={(e) => { setNameOnCard(e.target.value)
                    setError('');
                    }}
                  />
                </div>
                <div>
                  <label className="block text-base text-slate-700 font-semibold">Card Number</label>
                  <input
                    type="text"
                    placeholder="4232 4211 6731 0027"
                    className="mt-1 block w-full rounded-md py-3 p-2 border border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                    value={cardNumber}
                    onChange={(e) => { setCardNumber(e.target.value)
                    setError('');
                    }}
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-base text-slate-700 font-semibold">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="mt-1 block w-full rounded-md py-3 p-2 border border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm"
                      value={expiryDate}
                      onChange={(e) => { setExpiryDate(e.target.value)
                      setError('');
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-base text-slate-700 font-semibold">CVV</label>
                    <input
                      type="text"
                      placeholder="034"
                      className="mt-1 block w-full rounded-md py-3 p-2 border border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm"
                      value={cvv}
                      onChange={(e) => {setCvv(e.target.value)
                      setError('');
                      }}
                    />
                  </div>
                </div>
              </form>
            </section>
            <section className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-around lg:my-1 lg:shadow bg-white px-6 lg:py-4 rounded">
              <span>
                <Image src="/images/apple.png" alt="" height="50" width="30" className="inline-flex"/>
                <span className="ml-2 text-slate-900 font-semibold">Pay</span>
              </span>
              <span>
                <Image src="/images/dollarIcon.png" alt="" height="50" width="30" className="inline-flex"/>
                <span className="ml-4 text-slate-900 font-semibold">Cash On Delivery</span>
              </span>
              <span className=" hidden lg:block text-slate-900 font-semibold mr-2">Quick Payments</span>
            </section>
          </main>
  
          {/* aside on large screens*/}
          <aside className="lg:block lg:w-2/5 lg:py-2 lg:px-3">
            <div className="w-full bg-white shadow-sm h-auto pt-3 lg:py-4 px-6 lg:px-12 rounded">
              <p className="py-3 text-slate-900 font-semibold text-lg border-b border-gray-300">Order summary</p>
              <p className="border-b border-gray-300 py-3 space-x-10">
                <span>Selected Items({cart.quantity})</span><span>&#8358;{cart.total}</span>
              </p>
              <p className="py-3 font-bold text-slate-900 text-base border-b border-gray-300 space-x-10">
                <span>Sum Total</span>
                <span className="font-semibold">&#8358;{cart.total}</span>
              </p>
              <div className=" pt-6 pb-1">
                <button className="w-full bg-mainBg hover:bg-layoutMainBg hover:scale-105 py-3 px-6 rounded-xl text-black font-[600] text-sans" onClick={handleCheckout}>
                  Complete checkout
                </button>
              </div>
              <p className="text-sm text-red-600 font-semibold font-serif min-h-7 pl-1">{error && error}</p>
            </div>
            <div className="px-4 lg:px-2 text-sm lg:text-base">
              <span className="">
                By completing this transaction you agree to out <span className="text-lg font-semibold">TERMS</span> and <span className="text-lg font-semibold">CONDITIONS</span>
              </span>
            </div>
          </aside>
        </div>
      </div>
    
      {loading && <LoadingModal closeModal={() => setLoading(false)} />}
      {success && <SuccessModal closeModal={() => setSuccess(false)} />}
    </div>
  );
  
}

export default Checkout;