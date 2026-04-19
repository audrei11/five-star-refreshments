"use client";
import { motion } from "framer-motion";

const products = [
  {
    icon: "☕",
    name: "Coffee",
    desc: "Premium espresso, cappuccino, and specialty brews — freshly prepared for your team's perfect break.",
    color: "#FEC100",
    bg: "#FEC100",
  },
  {
    icon: "🍵",
    name: "Tea",
    desc: "Organic blends from around the world. From bold black teas to calming herbal infusions.",
    color: "#FF2124",
    bg: "#FF2124",
  },
  {
    icon: "💧",
    name: "Water",
    desc: "Pure, refreshing hydration delivered right to your workplace. Still, sparkling, and flavored options.",
    color: "#2E4EF7",
    bg: "#2E4EF7",
  },
  {
    icon: "🍪",
    name: "Snacks",
    desc: "Healthy and indulgent snacks curated to keep your team energized and satisfied throughout the day.",
    color: "#FEC100",
    bg: "#FEC100",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-[#111] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#FEC100] text-sm font-medium tracking-widest uppercase mb-4 block">
            What We Offer
          </span>
          <h2
            className="text-5xl md:text-6xl font-black text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Our <span className="text-[#FF2124]">Products</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-black border border-white/10 rounded-3xl p-8 flex flex-col gap-4 cursor-pointer group hover:border-[#FEC100]/50 transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: product.bg + "20" }}
              >
                {product.icon}
              </div>
              <h3
                className="text-2xl font-black text-white group-hover:text-[#FEC100] transition-colors"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {product.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{product.desc}</p>
              <div
                className="mt-auto w-8 h-1 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: product.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
