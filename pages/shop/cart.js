import Link from 'next/link';
import CartProductCard from '@/components/FComponents/CartProductCard';
import ProductCard from '@/components/FComponents/ProductCard';
import products from '@/utils/products';
import Image from 'next/image';

const Cart = () => {

  // For now the page is static with dummy data but i woould improve upon the functionaly enabling user to add data to cart. Save this in local storage and handle global state using redux toolkit 

  return (
    <div className="" style={{minHeight:"calc(100vh - 20vh)"}}>
      <div className="bg-[#000000E5] py-4 hidden lg:flex flex-col items-center">
        <p className="text-white text-center font-extralight">Exclusive Mens Collection</p>
        <div className="border w-[60vw] lg:w-[40vw]"></div>
      </div>
      <div className=" px-2 md:px-5 lg:px-12 py-4">
        <div>
          
          <main className="w-full">
            <section className="border-b border-slate-400 font-semibold px-4 lg:px-6">
            <div className="lg:flex gap-80 lg:pl-16">
              <h1 className="hidden lg:block text-2xl font-bold lg:text-center mb-5 pt-2 capitalize">Cart Summary</h1>
                <div className="">
                  <p className="inline-flex font-semibold text-lg">
                    <span className="bg-mainBg rounded-full flex justify-center items-center h-7 w-8 text-black mr-2 text-lg font-bold">3</span> Item(s) Selected
                  </p>
                  <p className="pl-7 p-1">Subtotal: <span className="font-bold text-xl">$150.00</span></p>
                </div>
            </div>
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
              <div className="flex justify-center items-center h-full"><Link href="/shop/checkout" className="bg-mainBg rounded-xl w-[80%] textwhite py-2 text-black font-bold text-center hover:bg-[#C05F3C] lg:ml-24 lg:pl-4">Proceed to checkout $150</Link></div>
            </section>
          </main>
          
          <section className="h-20 pt-4 pb-1 flex items-center">
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