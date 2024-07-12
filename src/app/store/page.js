"use client";

import React from "react";
import Products from "../components/Products";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <Cart />
      <div>
        <NavBar />
        <div className="bg-[#F5F5F5] p-5 m-1 flex flex-wrap justify-center gap-5">
          <h1 className="text-3xl font-bold text-[#322C2B] p-5 m-1 flex flex-wrap justify-center gap-5">
            Store
          </h1>
          <Products />
        </div>
        <Footer />
      </div>
    </>
  );
}
