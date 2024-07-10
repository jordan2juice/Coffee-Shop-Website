"use client";

import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="nav navbar">
      <h1 className="">
        The Daily Grind
      </h1>
      <nav className="">
        <Link href={'/'}>Home</Link>
        <Link href={'/store'}>Store</Link>
          
      </nav>
    </div>
  );
}
