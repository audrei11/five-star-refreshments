"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [added, setAdded] = useState<number | null>(null);
  const addItem = useCartStore((s) => s.addItem);

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleAdd = (product: typeof products[0]) => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category });
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <section id="products" className="bg-[#080B0F] py-24 px-6">
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00D4FF]" />
            <span className="text-[#00D4FF] text-xs font-bold tracking-[0.3em] uppercase">Our Arsenal</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              PREMIUM <span className="text-[#00D4FF]">HARDWARE</span>
            </h2>
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#00D4FF] text-black"
                      : "border border-white/10 text-white/40 hover:border-[#00D4FF]/50 hover:text-[#00D4FF]"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-[#0D1117] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300 group flex flex-col relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#00D4FF] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00D4FF]/0 group-hover:border-[#00D4FF]/60 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#00D4FF]/0 group-hover:border-[#00D4FF]/60 transition-all duration-300" />

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#0a0e14]">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-black px-2 py-1 tracking-widest uppercase"
                    style={{ backgroundColor: product.badgeColor, color: "#000" }}>
                    {product.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/60 text-white/60 text-xs px-2 py-1 border border-white/10">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="text-white font-black text-base leading-tight group-hover:text-[#00D4FF] transition-colors duration-200"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-white/30 text-xs leading-relaxed">{product.desc}</p>

                  <div className="flex items-center gap-1 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="text-[#00D4FF] fill-[#00D4FF]" />
                    ))}
                    <span className="text-white/20 text-xs ml-1">5.0</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[#00D4FF] font-black text-lg" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      ${product.price.toLocaleString()}
                    </span>
                    <button onClick={() => handleAdd(product)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                        added === product.id
                          ? "bg-green-500 text-white"
                          : "bg-[#00D4FF] text-black hover:bg-white"
                      }`}>
                      <ShoppingCart size={12} />
                      {added === product.id ? "Added!" : "Add"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
