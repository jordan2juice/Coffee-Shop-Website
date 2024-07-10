"use client";

import axios from "axios";
import React, { useEffect } from "react";

export default function WakeUp() {
  useEffect(() => {
    async function wakeup() {
      const response = await axios.get(
        "https://coffee-shop-backend-n9po.onrender.com"
      );
      console.log(response.data);
    }
    wakeup();
  }, []);

  return <div></div>;
}
