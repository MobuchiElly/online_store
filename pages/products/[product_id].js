import {useState, useEffect} from 'react'
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/router';

const Product = ({product}) => {
  const [price, setPrice] = useState(null);
  const router = useRouter();
  const baseURL = "https://api.timbu.cloud/images/";

  const handleAddCart = () => {
    router.push("/shop/cart");  
  }
  
  return (
    <div className="p-2">
      <div className="shadow-md border border-gray-200 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 md:px-10 py-1">
          <div className="h-64 bg-gray-50">
              <Image
                src={baseURL + product.photos[0]?.url}
                alt="product-image"
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg p-1"
              />
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-4">
            <div className="border border-black w-[30vw] lg:w-[16vw] my-1"></div>
        </div>
        
        <div className="px-4">
          <h3 className="text-sm font-extralight mb-2">Designed by Feramo</h3>
          <p className="mb-2 font-bold">{product.name}</p>

          <div className="hidden justify-between items-center text-sm">
            <span className="text-lg font-bold mr-4">Variations: </span>
            <button className="border border-black w-12 mx-1 py-1">S</button>
            <button className="border border-black w-12 mx-1 py-1">M</button>
            <button className="border border-black w-12 mx-1 py-1">L</button>
            <button className="border border-black w-12 px-1 py-1 ml-1">XXL</button>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="text-lg font-bold">&#8358;{product.current_price}</span>
            <button className="bg-mainBg hover:scale-105 text-black py-2 px-3 rounded-lg text-semibold" onClick={handleAddCart}>Add to Cart</button>
          </div>
        </div>
        <p className="px-4 text-center py-2 text-sm">30 days money back guarantee</p>
      </div>
    </div>
  )
}

export default Product


export const getServerSideProps = async({params}) => {
  try {
    const res = await axios.get(`https://api.timbu.cloud/products/${params.product_id}?organization_id=${process.env.NEXT_PUBLIC_ORG_ID}&Apikey=${process.env.NEXT_PUBLIC_API_KEY}&Appid=${process.env.NEXT_PUBLIC_APP_ID}`);
    const data = await res.data;
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