"use client"
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { isSeller, router, getCartCount } = useAppContext();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        const navbarTop = navbar.offsetTop;
        setIsFixed(window.scrollY > navbarTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isFixed && <div className="h-[60px] md:h-[64px]"></div>}
      <nav
        id="navbar"
        className={`flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-600 text-white bg-black transition-all duration-300 ${
          isFixed ? 'fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-md bg-black/95' : ''
        }`}
      >
      <div
        className="cursor-pointer text-2xl md:text-3xl font-bold"
        onClick={() => router.push('/')}
      >
        <span style={{ color: 'rgba(38, 242, 172, 0.96)' }}>Sh</span>
        <span className="text-white">opiee</span>
      </div>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-300 transition text-white">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-300 transition text-white">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-300 transition text-white">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-300 transition text-white">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border border-gray-600 px-4 py-1.5 rounded-full text-white hover:bg-gray-800 transition">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4 cursor-pointer" src={assets.search_icon} alt="search icon" />
        <Link href="/cart" className="relative flex items-center gap-2 hover:text-gray-300 transition text-white">
          <Image src={assets.cart_icon} alt="cart icon" className="w-4 h-4" />
          Cart
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </Link>
        <button className="flex items-center gap-2 hover:text-gray-300 transition text-white">
          <Image src={assets.user_icon} alt="user icon" className="w-4 h-4" />
          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        <Link href="/cart" className="relative flex items-center gap-2 hover:text-gray-300 transition text-white">
          <Image src={assets.cart_icon} alt="cart icon" className="w-4 h-4" />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </Link>
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border border-gray-600 px-4 py-1.5 rounded-full text-white hover:bg-gray-800 transition">Seller Dashboard</button>}
        <button className="flex items-center gap-2 hover:text-gray-300 transition text-white">
          <Image src={assets.user_icon} alt="user icon" className="w-4 h-4" />
          Account
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;