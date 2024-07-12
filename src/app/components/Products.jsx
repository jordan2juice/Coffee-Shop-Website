"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Cart from "./Cart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(
        "https://coffee-shop-backend-n9po.onrender.com/products"
      );
      setProducts(response.data);
      setLoading(false);
      console.log(response.data);
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loader mx-auto"></div>;
  }

  return (
    <div>
      <section className=" p-5 m-1 flex flex-wrap justify-center gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
}
