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
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <section id="products" className="bg-[#111] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#FEC100] text-sm font-medium tracking-widest uppercase mb-4 block">Our Menu</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>
            Premium <span className="text-[#FF2124]">Products</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Curated refreshments for your workplace. Quality you can taste in every break.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#FEC100] text-black scale-105"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-[#FEC100]/40 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-black"
                    style={{ backgroundColor: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="text-white font-black text-lg leading-tight" style={{ fontFamily: "Fraunces, serif" }}>
                      {product.name}
                    </h3>
                    <p className="text-white/40 text-xs mt-1 leading-relaxed">{product.desc}</p>
                  </div>

                  <div className="flex items-center gap-1 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-[#FEC100] fill-[#FEC100]" />
                    ))}
                    <span className="text-white/30 text-xs ml-1">(5.0)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#FEC100] font-black text-xl" style={{ fontFamily: "Fraunces, serif" }}>
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        added === product.id
                          ? "bg-green-500 text-white scale-95"
                          : "bg-[#FEC100] text-black hover:bg-[#FF2124] hover:text-white"
                      }`}
                    >
                      <ShoppingCart size={14} />
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
