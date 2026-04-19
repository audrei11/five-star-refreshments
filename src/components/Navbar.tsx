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

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#07090F]/96 backdrop-blur-2xl border-b border-white/6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
              <polygon points="16,2 30,28 2,28" fill="#00C8F0" />
              <polygon points="16,10 24,26 8,26" fill="#07090F" />
            </svg>
            <span className="text-white font-black text-2xl uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.01em" }}>
              NEX<span style={{ color: "#00C8F0" }}>CORE</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {[["Home", "home"], ["Products", "products"], ["About", "specs"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} href={`#${id}`}
                className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ fontFamily: "Inter, sans-serif" }}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleCart} className="relative group p-1">
              <ShoppingCart size={20} className="text-white/50 group-hover:text-white transition-colors" />
              {count() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#00C8F0] text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {count()}
                </span>
              )}
            </button>
            <a href="#contact"
              className="hidden md:flex items-center gap-2 bg-[#00C8F0] text-black text-xs font-black px-6 py-3 uppercase tracking-widest hover:bg-white transition-colors duration-200 shadow-[0_0_20px_rgba(0,200,240,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: "Inter, sans-serif" }}>
              Build a PC
            </a>
            <button className="md:hidden text-white/60 hover:text-white transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#07090F] flex flex-col items-center justify-center gap-10">
            {[["Home", "home"], ["Products", "products"], ["About", "specs"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}
                className="text-white font-black text-6xl uppercase hover:text-[#00C8F0] transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
