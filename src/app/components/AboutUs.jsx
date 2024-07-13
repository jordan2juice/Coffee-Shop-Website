"use client";

import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="about">
      <section>
        <h1 className="aboutTitle">About Us</h1>
        <p>
          Welcome to The Daily Grind, your cozy neighborhood coffee shop where
          exceptional coffee meets warm hospitality. Nestled in the heart of our
          community, we pride ourselves on serving meticulously sourced,
          ethically grown Arabica beans brewed to perfection by our skilled
          baristas. Whether you are enjoying a smooth breakfast blend, a robust
          dark roast, or a specialty latte, each cup is crafted with passion and
          care. Join us for fresh baked goods, a welcoming atmosphere, and a
          place where friends and neighbors come together to relax and connect.
          Come experience The Daily Grind, where great coffee and good company
          are always on the menu.
        </p>
      </section>
      <section>
        <img className="storeFront" src="/images/Store.png" alt="store front" />
      </section>
    </div>
  );
}
