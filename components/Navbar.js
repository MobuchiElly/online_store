import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [acctDropDwnOpen, setAcctDropDwnOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

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
          <Image src="/images/logo.png" height="100" width="100" className="ml-2 w-24 h-10"/>
        </div>
        <div className="lg:w-2/4 hidden lg:flex justify-around p-1">
          <Link href="/shop" className="text-yellow-200 hover:scale-105">Shop</Link>
        </div>
        <div className="lg:w-1/4 flex lg:justify-end items-center h-12">
          <Link href="/shop/cart" className="relative">
            <div className="absolute z-20 bg-white rounded-full h-6 w-6 left-[-14px] flex justify-center items-center font-bold text-xl border-none shadow" style={{top:'-15px'}}>
              <span className="text-layoutMainBg font-medium text-base">3</span>
            </div>
            <Image src="/images/cart.png" alt="cart" width="44" height="40" className="inline-flex w-8 h-auto hover:bg-layoutMainBg hover:scale-105"/>
          </Link>
      
          <div className="hidden lg:block h-9 w-1 ml-5 mr-1 font-extralight border-l-2 border-white"></div>
          <div className="ml-4 md:ml-2 " onClick={() => setAcctDropDwnOpen(!acctDropDwnOpen)}>
            <Image src="/images/person.png" width="20" height="20" className="w-5 lg:w-6 inline-flex mb-1 hover:scale-105"/>
          </div>
          <div className="h-8 font-bold border-l-2 border-white ml-2 mr-2 block lg:hidden"></div>
          <button onClick={() => setToggleNav(!toggleNav)} className="inline-flex lg:hidden w-8">
            {
              toggleNav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={34} className="inline-flex"/>
            }
          </button>
        </div>
            {/*mobile nav drop down */}
        <ul className={`w-full border-t-2 flex lg:hidden flex-col justify-center items-center bg-layoutMainBg font-sans rounded-bl-3xl rounded-tr-3xl border-l-4 border-r-4 px-4 ${toggleNav ? 'fixed md:hidden top-14vh left-0 z-50  border-r  ease-in-out duration-500' : 'ease-in-out bottom-0 fixed left-[-100%]'}`} style={{ zIndex: 100 }}>
            <li className="border-b w-full py-5 flex items-center justify-center">
              <Link href="/shop" className="" onClick={handleToggleNav}>Shop</Link>
            </li>
            <li className="border-b w-full py-5 flex items-center justify-center">
              <Link href="/shop/cart" className="" onClick={handleToggleNav}>Cart</Link>
            </li>
          </ul>
      
        <div
          className={`${styles["dropdown-container"]} ${
            acctDropDwnOpen ? styles["dropdown-visible"] : styles["dropdown-hidden"]
          }`}
        >
          <div className={`border-2 border-blue-600 ${styles["dropdown-content-1"]} px-4 py-2`}>
            <Image src="/images/userimage.png" width="50" height="20" className="inline-flex mr-2" />
            <span className="ml-1">John More</span>
          </div>
          <div
            className={`${styles["dropdown-content-2"]} px-6 py-5 ${
              acctDropDwnOpen ? styles["content-visible"] : styles["content-hidden"]
            }`}
          >
            <Image src="/images/logout.png" width="22" height="20" className="inline-flex mr-2" />
            <span className="ml-2">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;