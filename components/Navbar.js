import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from "react-redux";
import axios from "axios";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import app from "@/utils/auth-config/firebase-config";
import Auth from "./modals/AuthModal";


const Navbar = () => {
  const [name, setName] = useState('');
  const [acctDropDwnOpen, setAcctDropDwnOpen] = useState(false);
  const [openAuthModal, setopenAuthModal] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const quantity = useSelector(state => state.lapiscart.quantity ? state.lapiscart.quantity : 0);
  
  const auth = getAuth(app);
  onAuthStateChanged(auth, async (user) => {
    if(user){
      const authId = user.uid;
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/users/${authId}`);
        const userData = res.data;
        if(res.status === 200){
          const {name:userName} = userData;
          setName(userName);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
  
  const handleAuth = () => {
    //Check if the user is logged in
    if(!auth.currentUser){
      setopenAuthModal(true);
      return;
    }
    setAcctDropDwnOpen(!acctDropDwnOpen);
  }

  const acctSignOut = async () => {
    try {
      await signOut(auth);
      setAcctDropDwnOpen(false);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  }
  useEffect(() => {
    toggleNav === true ? setAcctDropDwnOpen(false) : null;
  }, [toggleNav]);
  useEffect(() => {
    acctDropDwnOpen === true ? setToggleNav(false) : null;
  }, [acctDropDwnOpen])
 

  return (
    <div className="sticky top-0 z-40">
      <div className="h-auto top-0 min-h-[14vh] lg:min-h-[16vh] bg-layoutMainBg flex items-center justify-between lg:justify-normal px-2 md:px-4 lg:px-10 font-semibold relative text-xl z-50 text-white">
        <div className="w-1/4">
          <Image src="/images/logo.png" alt="logo image" height="100" width="100" className="ml-2 w-24 h-10"/>
        </div>
        <div className="lg:w-2/4 hidden lg:flex justify-around p-1 text-2xl font-base text-black">
          Shop And Smile.
        </div>
        <div className="lg:w-1/4 flex lg:justify-end items-center h-12">
          <Link href="/shop/cart" className="relative">
            <div className={`absolute z-20 bg-white rounded-full h-6 w-6 left-[-14px] flex justify-center items-center font-bold text-xl border-none shadow ${quantity > 0 ? 'animate-pulse' : ''}`} style={{top:'-15px'}}>
              <span className="text-layoutMainBg font-bold text-lg">{quantity}</span>
            </div>
            <Image src="/images/cart.png" alt="cart image" width="44" height="40" className="inline-flex w-8 h-auto hover:bg-layoutMainBg hover:scale-105"/>
            <span className="hidden lg:inline-flex font-normal text-base pl-1">cart</span>
          </Link>
      
          <div className="hidden lg:block h-9 w-1 ml-5 mr-1 font-extralight border-l-2 border-white"></div>
          <div className="ml-4 md:ml-2 " onClick={handleAuth}>
            <Image src="/images/person.png" width="20" height="20" alt="profile image" className="w-5 lg:w-6 inline-flex mb-1 hover:scale-105"/>
          </div>
          <div className="h-8 font-bold border-l-2 border-white ml-2 mr-2 block lg:hidden"></div>
          <button onClick={() => setToggleNav(!toggleNav)} className="inline-flex lg:hidden w-8">
            {
              toggleNav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={34} className="inline-flex"/>
            }
          </button>
        </div>
            {/*mobile nav drop down */}
        <ul className={`w-full border-[#c05f3c] border-t-2 border-opacity-50 bg-[#c05f3c] flex lg:hidden flex-col justify-center items-center rounded-bl-3xl rounded-tr-3xl border-l-4 border-r-4 px-4 py-4 font-[650] text-black ${toggleNav ? 'fixed md:hidden top-14vh left-0 z-50  border-r  ease-in-out duration-500' : 'ease-in-out bottom-0 fixed left-[-100%]'}`} style={{ zIndex: 100 }}>
            <li className="border-b border-opacity-50 w-full py-5 flex items-center justify-center">
              <Link href="/" className="" onClick={handleToggleNav}>Shop</Link>
            </li>
            <li className="w-full py-5 flex items-center justify-center">
              <Link href="/shop/cart" className="" onClick={handleToggleNav}>Cart</Link>
            </li>
          </ul>
      
        <div
          className={`space-y-[1px] lg:py-[1px] ${styles["dropdown-container"]} ${
            acctDropDwnOpen ? styles["dropdown-visible"] : styles["dropdown-hidden"]
          }`}
        >
          <div className={`space-x-3 ${styles["dropdown-content-1"]} px-4 py-2`}>
            <Image src="/images/userimage.png" width="50" height="20" alt="profile image" className="inline-flex" />
            <span className="text-[16px]">{name}</span>
          </div>
          <div
            className={`space-x-6 ${styles["dropdown-content-2"]} px-6 py-5 hover:bg-mainBg ${
              acctDropDwnOpen ? styles["content-visible"] : styles["content-hidden"]
            }`}
          >
            <Image src="/images/logout.png" width="22" height="20" alt="close svg" className="inline-flex"/>
            <span onClick={acctSignOut} className="cursor-pointer text-[16px]">Logout</span>
          </div>
        </div>
      </div>
      {openAuthModal && <Auth closeModal={() => setopenAuthModal(false)}/>}
    </div>
  );
};

export default Navbar;