"use client";
import { motion } from "framer-motion";
import { Cpu, Shield, Truck, Headphones } from "lucide-react";

const features = [
  { icon: Cpu, title: "Top-Tier Components", desc: "Only the highest-grade hardware from the world's leading manufacturers.", color: "#00D4FF" },
  { icon: Shield, title: "2-Year Warranty", desc: "Every product backed by our comprehensive warranty and support program.", color: "#0066FF" },
  { icon: Truck, title: "Free Fast Shipping", desc: "Free express shipping on all orders. Delivered in 2-3 business days.", color: "#00D4FF" },
  { icon: Headphones, title: "Expert Support", desc: "Our PC experts are available 24/7 to help you build your perfect setup.", color: "#0066FF" },
];

export default function About() {
  return (
    <section id="specs" className="relative bg-[#0D1117] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#00D4FF] opacity-[0.04] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#00D4FF]" />
              <span className="text-[#00D4FF] text-xs font-bold tracking-[0.3em] uppercase">Why NEXCORE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase leading-none mb-6" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              ENGINEERED<br />FOR <span className="text-[#00D4FF]">LEGENDS</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-8">
              We don't just sell hardware. We curate the absolute best components tested by professionals, so you can build the machine of your dreams with confidence.
            </p>
            <a href="#products" className="inline-block border border-[#00D4FF] text-[#00D4FF] font-black px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#00D4FF] hover:text-black transition-all duration-300">
              Shop Now
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[["10,000+", "Builds Completed"], ["4.9/5", "Customer Rating"], ["50+", "Top Brands"], ["24/7", "Expert Support"]].map(([val, label]) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#080B0F] border border-white/5 p-6 hover:border-[#00D4FF]/30 transition-all duration-300 relative group">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00D4FF]/0 group-hover:border-[#00D4FF] transition-all duration-300" />
                <p className="text-[#00D4FF] font-black text-3xl mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>{val}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#080B0F] border border-white/5 p-6 hover:border-[#00D4FF]/30 transition-all duration-300 group">
              <div className="w-10 h-10 border mb-4 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00D4FF]/10"
                style={{ borderColor: f.color + "40" }}>
                <f.icon size={18} style={{ color: f.color }} />
              </div>
              <h3 className="text-white font-black text-base mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>{f.title}</h3>
              <p className="text-white/30 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
