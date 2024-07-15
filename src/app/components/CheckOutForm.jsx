"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { Button, Col, Form, FormLabel, FormText, Row } from "react-bootstrap";

export default function CheckoutForm({ setCheckoutComplete, clearCart }) {
  const { showModal, toggle } = useContext(CartContext);
  return (
    showModal && (
      <div className="flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
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
          <form className="space-y-4 font-[sans-serif] max-w-md mx-auto">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 m-2"
            >
              <input
                typeof="name"
                placeholder="Enter Name"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
              />
            </label>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 m-2"
            >
              <input
                type="Email"
                placeholder="Enter Email"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
              />
            </label>
            <label
              htmlFor="Card Holder"
              className="text-sm font-medium text-gray-700 m-2"
            >
              <input
                typeof="text"
                placeholder="Enter Card Number"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
              />
            </label>
            <label
              htmlFor="card numbewr"
              className="text-sm font-medium text-gray-700 m-2"
            >
              <input
                type="card number"
                placeholder="Enter Card Number"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
              />
            </label>
            <label
              htmlFor="expiration date"
              className="text-sm font-medium text-gray-700 m-2"
            >
              <input
                typeof="date"
                placeholder="Enter Expiration"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
              />
            </label>
            <label
              htmlFor="CVV"
              className="text-sm font-medium text-gray-700 m-2"
            >
              <input
                type="number"
                placeholder="Enter CVV"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
              />
            </label>
            <div className="flex">
              <input type="checkbox" className="w-4" />
              <label className="text-sm ml-4 ">Remember me</label>
            </div>
            <div className="flex gap-4">
              <button
                className="!mt-8 w-24 px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCheckoutComplete("shopping")}
              >
                Back
              </button>
              <button
                className="!mt-8 w-24 px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  setCheckoutComplete("complete");
                  clearCart();
                }}
                typeof="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
