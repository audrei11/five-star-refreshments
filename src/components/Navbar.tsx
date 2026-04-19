"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Zap } from "lucide-react";
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

  const links = ["Home", "Products", "Specs", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#080B0F]/95 backdrop-blur-xl border-b border-[#00D4FF]/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#00D4FF] rounded-lg flex items-center justify-center">
              <Zap size={18} className="text-black fill-black" />
            </div>
            <span className="text-white font-black text-xl tracking-widest uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              NEX<span className="text-[#00D4FF]">CORE</span>
            </span>
          </div>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}
                  className="text-white/50 hover:text-[#00D4FF] transition-colors duration-200 text-sm font-medium tracking-widest uppercase">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button onClick={toggleCart} className="relative text-white/60 hover:text-[#00D4FF] transition-colors">
              <ShoppingCart size={20} />
              {count() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#00D4FF] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-black">
                  {count()}
                </span>
              )}
            </button>
            <a href="#contact"
              className="hidden md:block border border-[#00D4FF] text-[#00D4FF] font-bold px-5 py-2 text-sm tracking-widest uppercase hover:bg-[#00D4FF] hover:text-black transition-all duration-300">
              Get Started
            </a>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#080B0F] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white text-5xl font-black tracking-widest uppercase hover:text-[#00D4FF] transition-colors"
                style={{ fontFamily: "Rajdhani, sans-serif" }}>
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
