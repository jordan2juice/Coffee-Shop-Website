"use client";

import React from "react";
import Products from "../components/Products";
import NavBar from "../components/NavBar";

export default function page() {
  return (
    <div>
        <NavBar />
      <h1>Store</h1>
      <Products />
    </div>
  );
}
