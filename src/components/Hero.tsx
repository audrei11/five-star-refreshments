"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#07090F] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07090F] via-[#090D18] to-[#0C1425]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-[-100px] w-[600px] h-[600px] rounded-full bg-[#00C8F0] opacity-[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] w-[500px] h-[500px] rounded-full bg-[#00C8F0] opacity-[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ minHeight: "calc(100vh - 200px)" }}>

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-[#00C8F0]" />
              <span className="text-[#00C8F0] text-xs font-semibold tracking-[0.35em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>Premium PC Hardware</span>
            </div>

            <h1 className="text-white font-black uppercase mb-7" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 4vw, 5rem)", lineHeight: 0.9, letterSpacing: "-0.01em" }}>
              BUILD YOUR<br /><span style={{ color: "#00C8F0" }}>LEGEND.</span>
            </h1>

            <p className="text-white/50 text-lg leading-relaxed max-w-md mb-10" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
              Premium components and peripherals engineered for those who refuse to compromise. Handpicked. Tested. Delivered.
            </p>

            <div className="flex items-center gap-4 flex-wrap mb-14">
              <a href="#products" className="bg-[#00C8F0] text-black text-sm font-black px-10 py-4 uppercase tracking-widest hover:bg-white transition-all duration-200 shadow-[0_0_28px_rgba(0,200,240,0.35)]" style={{ fontFamily: "Inter, sans-serif" }}>
                Shop Now
              </a>
              <a href="#specs" className="text-white/55 text-sm font-medium px-10 py-4 uppercase tracking-widest border border-white/15 hover:border-white/40 hover:text-white transition-all duration-200" style={{ fontFamily: "Inter, sans-serif" }}>
                Why NEXCORE
              </a>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-white/8">
              {[["10K+", "Builds Done"], ["4.9 ★", "Rating"], ["Free", "Shipping"], ["24/7", "Support"]].map(([val, label]) => (
                <div key={label}>
                  <p className="text-white font-black text-2xl leading-none mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{val}</p>
                  <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Product Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:flex items-center justify-center">
            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#00C8F0] opacity-[0.1] blur-[80px]" />
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=90"
                alt="RTX 4090 GPU"
                fill
                className="object-contain drop-shadow-[0_0_60px_rgba(0,200,240,0.2)]"
                priority
                sizes="500px"
              />
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-8 right-0 bg-white/[0.06] backdrop-blur-md border border-white/12 px-5 py-4">
              <p className="text-white/35 text-[9px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Featured</p>
              <p className="text-white font-black text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>RTX 4090 FE</p>
              <p className="font-black text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#00C8F0" }}>$1,599.99</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-8 left-0 bg-white/[0.06] backdrop-blur-md border border-white/12 px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-white/55 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>In Stock · Ships Today</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
