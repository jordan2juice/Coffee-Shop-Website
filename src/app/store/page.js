"use client";

import React from "react";
import Products from "../components/Products";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";

export default function page() {
  return (
    <>
      <Cart />
      <div>
        <NavBar />
        <h1>Store</h1>
        <Products />
      </div>
    </>
  );
}
