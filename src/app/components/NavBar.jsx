"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../context/cart";

export default function NavBar() {
  const { cartItems, showModal, toggle } = useContext(CartContext);

  return (
    <div className="nav navbar">
      <h1 className="">The Daily Grind</h1>
      <nav className="">
        <Link href={"/"}>Home</Link>
        <Link href={"/store"}>Store</Link>
      </nav>
      {!showModal && (
        <button
          className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          onClick={toggle}
        >
          Cart ({cartItems.length})
        </button>
      )}
    </div>
  );
}
