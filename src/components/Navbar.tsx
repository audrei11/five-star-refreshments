"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleCart, count } = useCartStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Products", "About", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-[#FEC100]/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FEC100] rounded-full flex items-center justify-center">
              <span className="text-black font-black text-lg" style={{ fontFamily: "serif" }}>S</span>
            </div>
            <div>
              <span className="text-white font-bold text-sm block leading-none">five.star</span>
              <span className="text-white font-bold text-sm block leading-none">refreshments</span>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-[#FEC100] transition-colors duration-200 text-sm font-medium tracking-wide">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button onClick={toggleCart} className="relative text-white hover:text-[#FEC100] transition-colors">
              <ShoppingCart size={22} />
              {count() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF2124] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {count()}
                </span>
              )}
            </button>
            <a href="#contact" className="hidden md:block bg-[#FEC100] text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-[#FF2124] hover:text-white transition-all duration-300">
              Free Trial
            </a>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="text-white text-4xl font-bold hover:text-[#FEC100] transition-colors"
                style={{ fontFamily: "Fraunces, serif" }}>
                {link}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="bg-[#FEC100] text-black font-bold px-8 py-3 rounded-full text-lg mt-4">
              Free Trial
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
