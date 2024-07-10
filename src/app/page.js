"use client";

import WakeUp from "./components/WakeUp";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Products />
      <WakeUp />
    </main>
  );
}
