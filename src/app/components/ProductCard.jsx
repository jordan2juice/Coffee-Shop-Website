"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";

export default function ProductCard({ product }) {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <div>
      <div class=" bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] flex flex-col flex-box justify-between border p-2 w-full h-[750px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <img src={product.imageURL} className=" rounded-md " />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed h-20 overflow-hidden hover:overflow-scroll hover:h-[140px]">
            {product.description}
          </p>
          <p className="mt-3 cardText">${product.price}</p>
          <button
            type="button"
            className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
