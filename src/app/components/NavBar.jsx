"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import Image from "next/image";

export default function NavBar() {
  const { cartItems, showModal, toggle } = useContext(CartContext);

  return (
    <div classNameName="">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image alt="coffee bean"  src={"/images/Coffee-beans.svg"} height={30} width={30} />
            <span className="ml-3 text-xl">The Daily Grind</span>
          </a>
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"/store"} className="mr-5 hover:text-gray-900">
              Store
            </Link>
          </div>
          {!showModal && (
            <button
              classNameName="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              Cart ({cartItems.length})
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
