"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import Cart from "./Cart";

export default function ProductCard({ product }) {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="card">
        <div className="min-h-[245px]">
          <img src={product.imageURL} className="w-full rounded-lg" />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            {product.description}
          </p>
          <p className="mt-3 text-lg font-bold">${product.price}</p>
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
