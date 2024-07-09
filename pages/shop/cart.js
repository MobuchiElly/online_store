import Link from 'next/link';
import CartProductCard from '@/components/FComponents/CartProductCard';
import ProductCard from '@/components/FComponents/ProductCard';
import ProductList from '@/components/FComponents/ProductList';
import {useState} from 'react'
import { useSelector } from 'react-redux';
import products from '@/utils/products';
import Image from 'next/image';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.items);

  // For now the page is static with dummy data but i woould improve upon the functionaly enabling user to add data to cart. Save this in local storage and handle global state using redux toolkit 

  return (
    <div className="" style={{minHeight:"calc(100vh - 20vh)"}}>
      <div className="bg-[#000000E5] py-4 flex flex-col items-center">
        <p className="text-white text-center font-extralight">Exclusive Mens Collection</p>
        <div className="border w-[60vw] lg:w-[40vw]"></div>
      </div>
      <div className="px-5 lg:px-12 py-4">
        <div>
          <h1 className="text-2xl font-bold lg:text-center mb-5 pt-2 capitalize">Cart Summary</h1>
        
          { !cartItems.length > 0 ?
          <div className="lg:flex">
            <main className="w-full lg:w-2/3">
              <section className="border-b border-slate-400 font-semibold lg:px-6">
                <p className="inline-flex font-semibold text-lg">
                  <span className="bg-mainBg rounded-full flex justify-center items-center h-7 w-8 text-white mr-2 text-lg font-bold">3</span> Item(s) Selected
                </p>
                <p className="pl-1 p-1">Subtotal: <span className="font-bold text-xl">$150.00</span></p>
              </section>
              <section className="border-b border-slate-400">
              <CartProductCard product={products[0]}/>
              </section>
              <section className="border-b border-slate-400">
              <CartProductCard product={products[1]}/>
              </section>
              <section className="border-b border-slate-400">
              <CartProductCard product={products[2]}/>
              </section>
              <section className="h-16 mb-3 md:mb-6 border-b border-slate-400 mt-2">
                <div className="flex justify-center items-center h-full"><Link href="/shop/checkout" className="bg-mainBg rounded-xl w-[80%] textwhite py-3 text-white font-bold text-center">Proceed to checkout $150</Link></div>
              </section>
            </main>
        
            {/* aside */}
              <aside className={`border border-black lg:border lg:border-slate-400 ml-2 px-2 py-2 flex justify-center lg:ml-6 ${!cartItems.length > 0 ? "lg:w-1/3" : "w-full"}`}>
              <div className="w-[94%]">
                <p className="font-bold text-xl text-center">Top Products of the Week</p>
                <ProductCard product={products[11]}/>
                <ProductCard product={products[10]}/>
              </div>
            </aside>
          </div> :
          <div className="h-auto p-2">
            <div className="flex justify-center">
              <Image src="/images/emptyCart.png" height="300" width="300"/>
            </div>
            <div className="lg:text-center font-semibold font-serif">
              <span className="block text-xl">Ooops!!!</span>
              <p className="">
                <p className="mr-3 lg:inline-flex">It appears you have no items added to cart presently</p>
                <button className="bg-mainBg text-white rounded-lg px-4 py-3 font-sans mt-2 lg:mt-0 lg:inline-flex">
                  <Link href="/shop">Go Back</Link>
                </button>
              </p>
            <span className="block text-xl mt-8 mb-2 font-roboto">Top Trending Wears</span>
            </div>
          </div>
          }
        
          <section className={`h-20 pt-4 pb-1 ${cartItems.length > 0 ? 'flex items-center' : 'hidden'}`}>
            <p className="font-bold text-xl lg:px-6">You may also like</p></section>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 pb-4">
            <ProductCard product={products[5]}/>
            <ProductCard product={products[6]}/>
            <ProductCard product={products[7]}/>
            <div className="md:hidden lg:block">
              <ProductCard product={products[8]}/>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Cart