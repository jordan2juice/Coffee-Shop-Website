"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";

export default function CheckoutForm({ setCheckoutComplete, clearCart }) {
  const { showModal, toggle } = useContext(CartContext);
  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <form className="flex flex-col">
            <label htmlFor="name">
              Name:
              <input  
               type="text" id="name" name="name" required />
            </label>
            <label className="flex flex-col" htmlFor="phone">
              Phone:
              <input type="text" id="phone" name="phone" required />
            </label>
            <label htmlFor="email">
              Email:
              <input type="email" id="email" name="email" required />
            </label>
            <label htmlFor="address">
              Address:
              <input type="text" id="address" name="address" required />
            </label>
            <label htmlFor="card-number">
              Card Number:
              <input type="text" id="card-number" name="card-number" required />
            </label>
            <label htmlFor="expiry-date">
              Expiry Date:
              <input type="text" id="expiry-date" name="expiry-date" required />
            </label>
            <label htmlFor="cvv">
              CVV:
              <input type="text" id="cvv" name="cvv" required />
            </label>
            <button
              onClick={() => {
                setCheckoutComplete("complete");
                clearCart();
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
          <button onClick={() => setCheckoutComplete("shopping")}>Back</button>
        </div>
      </div>
    )
  );
}
