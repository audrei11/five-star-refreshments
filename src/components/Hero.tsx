"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
          alt="Coffee background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2124] rounded-full translate-x-1/2 -translate-y-1/2 opacity-80" />
      <div className="absolute bottom-0 right-0 w-[500px] h-72 bg-[#FEC100] rounded-tl-full opacity-80" />
      <div className="absolute bottom-1/3 left-0 w-56 h-56 bg-[#2E4EF7] rounded-full -translate-x-1/3 opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#FEC100] font-medium text-sm tracking-widest uppercase mb-4 block">
              Coffee · Tea · Water · Snacks
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Because you <span className="text-[#FEC100]">deserve</span> a quality <span className="text-[#FF2124]">break</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Every day we bring our customers what they need, when they need it, for great breaks. We are the great break-bringers!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-[#FEC100] text-black font-bold px-8 py-4 rounded-full text-base hover:bg-[#FF2124] hover:text-white transition-all duration-300 hover:scale-105 inline-block">
                Shop Now
              </a>
              <a href="#contact" className="border border-white/30 text-white font-medium px-8 py-4 rounded-full text-base hover:border-[#FEC100] hover:text-[#FEC100] transition-all duration-300 inline-block">
                Free Trial
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px]">
            <div className="absolute inset-0 bg-[#FEC100] rounded-full opacity-10 blur-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=800&q=80"
              alt="Premium coffee"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-[#FEC100]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FEC100] rounded-full flex items-center justify-center font-black text-black">S</div>
                <div>
                  <p className="text-white font-bold text-sm">five.star refreshments</p>
                  <p className="text-[#FEC100] text-xs">Premium Quality Break</p>
                </div>
                <div className="ml-auto bg-[#FEC100] text-black text-xs font-bold px-3 py-1 rounded-full">Free Trial</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#111" />
        </svg>
      </div>
    </section>
  );
}
