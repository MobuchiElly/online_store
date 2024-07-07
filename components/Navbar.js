import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [acctDropDwnOpen, setAcctDropDwnOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="border h-auto min-h-[16vh] bg-mainBg flex items-center justify-between lg:justify-normal px-6 font-bold relative text-lg z-50">
      <div className="w-1/4">
        <Image src="/images/logo.png" height="100" width="100" className="ml-2" />
      </div>
      <div className="border lg:w-2/4 hidden lg:flex justify-around">
        <Link href="#">Home</Link>
        <Link href="#">Shop</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Favourite</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className="lg:w-1/4 border flex lg:justify-end px-4 items-center">
        <div className="relative">
          <div className="absolute bg-white rounded-full h-6 w-6 left-10 flex justify-center items-center font-bold text-xl border-none shadow" style={{top:'-15px'}}>
            <span>1</span>
          </div>
          <Image src="/images/cart.png" alt="cart" width="44" height="40" className="inline-flex w-10 "/>
          <p className="hidden lg:inline-flex ml-2 mr-4">Cart</p>
        </div>
        <div className="hidden lg:block h-6 w-1 font-extralight border-l border-black mx-4"></div>
        <div className="ml-4" onClick={() => setAcctDropDwnOpen(!acctDropDwnOpen)}>
          <Image src="/images/person.png" width="20" height="20" className="w-7 lg:w-6"/>
        </div>
        <div className="h-6 w-1 font-extralight border-l border-black mx-4"></div>
        <button onClick={() => setToggleNav(!toggleNav)}>
          {
            toggleNav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>
          }
        </button>
      </div>
          {/*mobile nav drop down */}
      <ul className={`w-full border-t-2 flex flex-col justify-center items-center bg-mainBg rounded-bl-3xl rounded-tr-3xl border-l-4 border-r-4 px-4 ${toggleNav ? 'fixed md:hidden left-0 z-50 top-24  border-r  ease-in-out duration-500' : 'ease-in-out bottom-0 fixed left-[-100%]'}`} style={{ zIndex: 100 }}>
          <li className="border-b w-full py-5 flex items-center justify-center">
            <Link href="#" className="">Home</Link>
          </li>
          <li className="border-b w-full py-5 flex items-center justify-center">
            <Link href="#" className="">Shop</Link>
          </li>
          <li className="border-b w-full py-5 flex items-center justify-center">
            <Link href="#" className="">Blog</Link>
          </li>
          <li className="border-b w-full py-5 flex items-center justify-center">
            <Link href="#" className="">Favourite</Link>
          </li>
          <li className="w-full py-5 flex items-center justify-center">
            <Link href="#" className="">Contact</Link>
          </li>
        </ul>

      <div
        className={`${styles["dropdown-container"]} ${
          acctDropDwnOpen ? styles["dropdown-visible"] : styles["dropdown-hidden"]
        }`}
      >
        <div className={`${styles["dropdown-content-1"]} px-4 py-2`}>
          <Image src="/images/userimage.png" width="50" height="20" className="inline-flex mr-2" />
          <span>John More</span>
        </div>
        <div
          className={`${styles["dropdown-content-2"]} px-6 py-5 ${
            acctDropDwnOpen ? styles["content-visible"] : styles["content-hidden"]
          }`}
        >
          <Image src="/images/logout.png" width="22" height="20" className="inline-flex mr-2" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
