"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2124] rounded-full translate-x-1/2 -translate-y-1/2 opacity-90" />
      <div className="absolute bottom-0 right-0 w-96 h-64 bg-[#FEC100] rounded-tl-full opacity-90" />
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-[#2E4EF7] rounded-full -translate-x-1/3 opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FEC100] font-medium text-sm tracking-widest uppercase mb-4 block">
              Coffee · Tea · Water · Snacks
            </span>
            <h1
              className="text-6xl md:text-7xl font-black text-white leading-none mb-6"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Because you{" "}
              <span className="text-[#FEC100]">deserve</span> a quality{" "}
              <span className="text-[#FF2124]">break</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Every day we bring our customers what they need, when they need it, for great breaks. We are the great break-bringers!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#FEC100] text-black font-bold px-8 py-4 rounded-full text-base hover:bg-[#FF2124] hover:text-white transition-all duration-300 hover:scale-105 inline-block"
              >
                Start Free Trial
              </a>
              <a
                href="#products"
                className="border border-white/30 text-white font-medium px-8 py-4 rounded-full text-base hover:border-[#FEC100] hover:text-[#FEC100] transition-all duration-300 inline-block"
              >
                Our Products
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-[#2E4EF7] rounded-full opacity-20 blur-3xl" />
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-[#FEC100] via-[#FF2124] to-[#2E4EF7] rounded-3xl flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-[#FEC100] font-black text-2xl" style={{ fontFamily: "serif" }}>S</span>
              </div>
              <span className="text-white font-black text-xl block" style={{ fontFamily: "Fraunces, serif" }}>five.star</span>
              <span className="text-white font-black text-xl block" style={{ fontFamily: "Fraunces, serif" }}>refreshments</span>
              <div className="mt-6 bg-[#FEC100] text-black font-bold px-4 py-2 rounded-full text-sm">
                Because you deserve a quality break
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#111111" />
        </svg>
      </div>
    </section>
  );
}
