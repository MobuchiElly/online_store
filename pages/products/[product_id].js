import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router';
import {useDispatch} from "react-redux";
import { addItem } from '@/utils/redux/features/cartSlice';
import Preloader from '@/components/Preloader';

const Product = ({product}) => {
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [preloader, setPreloader] = useState(true);
  const dispatch = useDispatch();

  
  const handleAddCart = () => {
    dispatch(addItem({...product, quantity}));
  }
  
  useEffect(() => {
    const preloaderTimeout = setTimeout(() => {
      setPreloader(false);
    }, 2000);

    return () => clearTimeout(preloaderTimeout)
  }, []);

  return (
    <div className="px-3 py-10 lg:p-4 lg:flex justify-center min-h-[70vh]">
      <div className="shadow-md border border-gray-200 rounded-lg overflow-hidden lg:w-[80%] lg:flex lg:gap-4 md:px-10 py-1">
        <div className="w-full lg:flex-1">
          <div className="h-full bg-gray-50">
              <Image
                src={product?.images[0]?.url}
                alt="product-image"
                objectFit="cover"
                width={100}
                height={100}
                className="w-full object-cover h-auto rounded-xl"
              />
          </div>
        </div>
 
        {/* <div className="hidden md:flex justify-center mt-4">
            <div className="border border-black w-[30vw] lg:w-[16vw] my-1"></div>
        </div> */}
        
        <div className='lg:flex-1 px-2 py-4 lg:p-2'>
          <div className="lg:px-4 space-y-4">
            <p className="mb-2 text-3xl font-[600]">
              {product.title}
            </p>
            <div className="flex justify-between items-center my-2">
              <span className="text-lg font-[600]">Price: &#8358;{product.price}</span>
            </div>
            <div className="text-sm">
              <span className="text-lg font-[600] mr-1">Sizes: </span>
              <button className="border border-black border-opacity-20 font-semibold rounded-lg w-12 mx-1 py-1">S</button>
              <button className="border border-black w-12 mx-1 py-1 border-opacity-20 font-semibold rounded-lg">M</button>
              <button className="border border-black w-12 mx-1 py-1 border-opacity-20 font-semibold rounded-lg">L</button>
              <button className="border border-black w-12 px-1 py-1 ml-1 border-opacity-20 font-semibold rounded-lg">XXL</button>
            </div>
            <div>
              * * * * * ( 0 ratings )
            </div>
            <div className={true ? 'text-green-500' : 'text-red-400'}>
              Available
            </div>
            <div className='rounded-md border lg:w-5/6'>
              <select value="color" className='w-full px-3 py-4 text-xl font-[500]'>
                <option defaultValue>Select color</option>
                <option value={1}>white</option>
                <option value={1}>red</option>
                <option value={1}>blue</option>
                <option value={1}>grey</option>
              </select>
            </div>
            <div className=''>
              <span className='font-[500]'>Quantity</span>
              <div>
                <button className="border border-black border-opacity-20 font-semibold rounded-lg w-12 mx-1 py-1">-</button>
                <button className="border border-black border-opacity-20 font-semibold rounded-lg w-12 mx-1 py-1">1</button>
                <button className="border border-black border-opacity-20 font-semibold rounded-lg w-12 mx-1 py-1">+</button>
              </div>
            </div>
            <div className='gap-12 lg:gap-6 flex flex-col-reverse lg:flex-col'>
              <button className="bg-mainBg bg-opacity-90 lg:bg-opacity-100 hover:bg-layoutMainBg hover:bg-opacity-95 text-white font-bold text-xl py-4 px-3 w-full lg:w-5/6 rounded-xl text-semibold sticky bottom-0" onClick={handleAddCart}>
                Add to Cart
              </button>
              <div className='space-x-6'>
                <p className='my-1 text-lg'>Share our product to friends</p>
                <span className='cursor-pointer'>
                  <Link href="#">
                    <Image src="/assets/images/twitter-x-icon.svg" alt="icon" width={25} height={20} className="inline-flex"/>
                  </Link>
                </span>
                <span>
                  <Image src="/assets/images/facebook-icon.svg" alt="icon" width={25} height={20} className="inline-flex"/>
                </span>
                <span>
                  <Image src="/assets/images/whatsapp-icon.svg" alt="icon" width={25} height={20} className="inline-flex"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {preloader && <Preloader />}
    </div>
  )
}

export default Product


export const getServerSideProps = async({params}) => {
  try {
    const res = await axios.get(`${process.env.ENDPOINT_URL}/${params.product_id}`);
    const data = await res.data.data;
    return {
      props: {
        product: data
      }
    }
  } catch(err) {
    return {
      props: {
        product: []
      }
    }
  }
}