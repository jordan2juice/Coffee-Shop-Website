import { Inter } from "next/font/google";
import "./globals.css";
import "./Sass/main.scss";
import { CartProvider } from "./context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Daily Grind",
  description: "Frontend next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={inter.className}>{children}</body>
      </CartProvider>
    </html>
  );
}
