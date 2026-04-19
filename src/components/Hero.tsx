"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#080B0F] flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF] rounded-full opacity-[0.06] blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#0066FF] rounded-full opacity-[0.08] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#00D4FF]" />
              <span className="text-[#00D4FF] text-xs font-bold tracking-[0.3em] uppercase">Premium PC Hardware</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 uppercase"
              style={{ fontFamily: "Rajdhani, sans-serif" }}>
              BUILD<br />
              YOUR<br />
              <span className="text-[#00D4FF] glow-text">LEGEND</span>
            </h1>
            <p className="text-white/40 text-base leading-relaxed mb-10 max-w-md font-light">
              Premium PC components and peripherals engineered for those who refuse to compromise. Performance without limits.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products"
                className="bg-[#00D4FF] text-black font-black px-8 py-4 text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 hover:scale-105 inline-block">
                Shop Now
              </a>
              <a href="#specs"
                className="border border-white/20 text-white/60 font-medium px-8 py-4 text-sm tracking-widest uppercase hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 inline-block">
                View Specs
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/5">
              {[["10K+", "Builds"], ["4.9★", "Rating"], ["Free", "Shipping"]].map(([val, label]) => (
                <div key={label}>
                  <p className="text-[#00D4FF] font-black text-xl" style={{ fontFamily: "Rajdhani, sans-serif" }}>{val}</p>
                  <p className="text-white/30 text-xs tracking-widest uppercase">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full h-[560px]">
            <div className="absolute inset-0 border border-[#00D4FF]/20 rounded-none" />
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#00D4FF]" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#00D4FF]" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#00D4FF]" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#00D4FF]" />
            <Image
              src="https://images.unsplash.com/photo-1593640408182-31c228b61a76?w=800&q=80"
              alt="Premium PC Setup"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080B0F] via-transparent to-transparent opacity-60" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-8 left-8 bg-[#0D1117] border border-[#00D4FF]/30 p-4 backdrop-blur-sm"
            >
              <p className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-1">Featured Build</p>
              <p className="text-white font-black text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>RTX 4090 Titan Rig</p>
              <p className="text-white/40 text-xs">Starting at $4,299</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080B0F] to-transparent" />
    </section>
  );
}
