import Link from 'next/link';
import CheckoutProductCard from '@/components/FComponents/CartProductCard';
import ProductCard from '@/components/FComponents/ProductCard';
import ProductList from '@/components/FComponents/ProductList';
import LoadingModal from '@/components/modals/LoadingModal';
import SuccessModal from '@/components/modals/SuccessModal';
import {useState} from 'react'

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


  const handleCheckout = () => {
    
  }

  return (
    <div className="px-5 lg:px-12 py-4" style={{minHeight:"calc(100vh - 20vh)"}}>
      <div>
        <h1 className="text-2xl font-bold lg:text-center mb-5 pt-2 capitalize">Cart Summary</h1>
        <div className="lg:flex">
          <main className="w-full lg:w-2/3">
            <section className="border-b border-slate-400 font-semibold lg:px-6">
              <p className="inline-flex font-semibold text-lg">
                <span className="bg-mainBg rounded-full flex justify-center items-center h-7 w-8 text-white mr-2 text-lg font-bold">3</span> Item(s) Selected
              </p>
              <p className="pl-1 p-1">Subtotal: <span className="font-bold text-xl">$150.00</span></p>
            </section>
            <section className="border-b border-slate-400">
            <CheckoutProductCard />
            </section>
            <section className="border-b border-slate-400">
            <CheckoutProductCard />
            </section>
            <section className="border-b border-slate-400">
            <CheckoutProductCard />
            </section>
            <section className="h-16 mb-3 md:mb-2 border-b border-slate-400">
              <div className="flex justify-center items-center h-full"><Link href="/shop/checkout" className="bg-mainBg rounded-xl w-[80%] textwhite py-2 text-white font-bold text-center">Proceed to checkout $150</Link></div>
            </section>
          </main>
        
          {/* aside */}
          <aside className="w-1/3 lg:border lg:border-slate-400 ml-2 px-2 py-2 flex justify-center">
            <div className="w-[90%]">
              <p className="font-bold text-xl text-center">Top viewed of the week</p>
              <ProductCard />
              <ProductCard />
            </div>
          </aside>
        </div>
        <section className="h-20 pt-4 pb-1 flex items-center">
          <p className="font-bold text-xl lg:px-6">Top Products of the Week</p></section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 pb-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <div className="md:hidden lg:block">
            <ProductCard />
          </div>
        </section>
        <section className="h-20 pt-4 pb-1 flex items-center">
          <p className="font-bold text-xl lg:px-6">You may also like</p></section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 pb-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <div className="md:hidden lg:block">
            <ProductCard />
          </div>
        </section>
      </div>
        {
            loading && <LoadingModal closeModal={() => setLoading(false)}/>
        }
        {
          success && <SuccessModal />
        }
    </div>
  )
}

export default Cart