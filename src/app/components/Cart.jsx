"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import CheckoutForm from "./CheckOutForm";

export default function Cart() {
  const [checkoutComplete, setCheckoutComplete] = useState("shopping");

  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    showModal,
    toggle,
  } = useContext(CartContext);
  if (checkoutComplete === "shopping") {
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
            {cartItems.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-md h-24"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{item.title}</h1>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </button>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  setCheckoutComplete("checking out");
                  clearCart();
                }}
              >
                Checkout
              </button>
            </div>
          ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
          )}
        </div>
      )
    );
  } else if (checkoutComplete === "checking out") {
    return (
      <div>
        <CheckoutForm
          setCheckoutComplete={setCheckoutComplete}
          clearCart={clearCart}
        />
      </div>
    );
  } else {
    return (
      <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
        <h1 className="text-2xl font-bold">Checkout Complete</h1>
        <button
          onClick={() => {
            toggle();
            setCheckoutComplete('shopping');

          }}
        >
          Close
        </button>
      </div>
    );
  }
}
