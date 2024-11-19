import Link from 'next/link';
import CartProductCard from '@/components/FComponents/CartProductCard';
import ProductCard from '@/components/FComponents/ProductCard';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { UseDispatch } from 'react-redux';
import { clearCart } from '@/utils/redux/features/cartSlice';

const Cart = ({products}) => {
  const cart = useSelector(state => state.lapiscart);
  const [itemsTotal, setitemsTotal] = useState(cart.quantity);
  const [suggestedProducts, setsuggestedProducts] = useState([]);
  const dispatch = useDispatch();

  const updateQuantity = () => {

  };
  
  useEffect(() => {
    const cartedProductsIds = cart.items.map(product => product._id);
    console.log("carted:", cartedProductsIds); console.log("products:", products);
    const suggested = products?.filter(product => !cartedProductsIds.includes(product._id));
    console.log("suggested products:", suggested);
    setsuggestedProducts(suggested);
  }, [cart.items, products]);
  

  return (
    <div className="lg:pb-6" style={{minHeight:"calc(100vh - 20vh)"}}>
      <div className="bg-[#000000E5] py-4 hidden lg:flex flex-col items-center">
        <p className="text-white text-center font-extralight">Exclusive Mens Collection</p>
        <div className="border w-[60vw] lg:w-[40vw]"></div>
      </div>
      <div className='lg:flex lg:justify-center'>
        <div className="md:px-5 lg:px-12 py-4 lg:w-[80%]">
            <main className=''>
              {cart?.quantity > 0 ?
              <section>
                <div className="border-b border-slate-400 font-semibold px-3 lg:px-4 flex justify-between lg:justify-evenly">
                  <div className="lg:flex gap-80 lg:pl-16">
                    <h1 className="hidden lg:block text-2xl font-bold lg:text-center mb-5 pt-2 capitalize">Cart Summary</h1>
                    <div className="">
                      <p className="inline-flex font-semibold text-lg">
                        <span className="bg-mainBg rounded-full flex justify-center items-center h-7 w-8 text-black mr-2 text-lg font-bold">{cart.quantity}</span> Item(s) Selected
                      </p>
                      <p className="pl-7 p-1">Subtotal: <span className="font-bold text-xl">&#8358;{cart.total}</span></p>
                    </div>
                  </div>
                  <div className='inline-flex gap-1'>
                    <span className='pt-1'>
                      <Image src="/assets/images/delete-icon-white.png" alt="delete-icon" height={20} width={16} className=""/>
                    </span>
                    <button className='font-[600] inline-flex' onClick={() => {
                      dispatch(clearCart())
                      }}>Clear cart</button>
                  </div>
                </div>
                <div className="border-b border-slate-400 lg:flex pb-2">
                  <div className="bg-white lg:w-4/5">
                    {
                      cart && cart.items.map(product => (
                        <CartProductCard product={product} id={product._id} updateQuantity={updateQuantity}/>
                      ))
                    }
                  </div>
                </div>
                <div className="h-16 mb-3 md:mb-6 border-b border-slate-400 mt-2">
                  <div className="flex justify-center items-center h-full"><Link href="/shop/checkout" className="bg-mainBg rounded-xl w-[80%] textwhite py-2 text-black font-bold text-center hover:bg-[#C05F3C] lg:ml-24 lg:pl-4">Proceed to checkout &#8358;{cart.total}</Link></div>
                </div>
              </section> :
              <section className="h-auto p-2">
                <div className="flex justify-center">
                  <Image src="/images/emptyCart.png" height="300" width="300"/>
                </div>
                <div className="lg:text-center font-semibold font-serif">
                  <span className="block text-xl">Ooops!!!</span>
                  <p className="">
                    <p className="mr-3 lg:inline-flex">It appears you have no items added to cart presently</p>
                    <button className="bg-mainBg font-bold rounded-lg px-4 py-3 font-roboto mt-2 lg:mt-0 lg:inline-flex">
                      <Link href="/">Go Back</Link>
                    </button>
                  </p>
                </div>
              </section>
              }
            </main>
        </div>
      </div>  
      {/* { suggestedProducts && suggestedProducts.length > 0 &&
      <section className='lg:pl-20'>
        <div className="h-20 pt-4 pb-1 flex items-center">
          <p className="font-[400] text-3xl lg:px-6">Top Trending Wears</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full lg:w-[85%] px-2 pt-4 mb-10">
          {suggestedProducts.slice(0,8).map(product => (
              <ProductCard product={product} id={product._id}/>
            ))}
        </div>
      </section> } */}
    </div>
  )
}

export default Cart;

export const getServerSideProps = async () => {
  try {
      const res = await axios.get(`${process.env.ENDPOINT_URL}`);
      const data = res.data.data;
      return {
          props: {
              products: data,
          },
      };
  } catch (error) {
      console.error("Error fetching data", error);
      return {
          props: {
              products: [],
          },
      };
  }
};