"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [added, setAdded] = useState<number | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  const handleAdd = (product: typeof products[0]) => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category });
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1800);
  };

  return (
    <section id="products" style={{ background: "#07090F", padding: "128px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 1, background: "#00C8F0" }} />
              <span style={{ color: "#00C8F0", fontSize: 11, fontFamily: "Inter, sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600 }}>Our Arsenal</span>
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 52, fontWeight: 900, color: "#fff", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              PREMIUM <span style={{ color: "#00C8F0" }}>HARDWARE</span>
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: "8px 16px", fontSize: 11, fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.15)", background: activeCategory === cat ? "#00C8F0" : "transparent", color: activeCategory === cat ? "#000" : "rgba(255,255,255,0.45)", transition: "all 0.2s" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div key={product.id} layout
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                style={{ background: "#0F1A2E", border: "1px solid #1E3A5F", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}
                whileHover={{ borderColor: "rgba(0,200,240,0.4)" }}
              >
                <div style={{ position: "relative", height: 220, overflow: "hidden", background: "#0D1525", flexShrink: 0 }}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width:640px) 100vw, 25vw" style={{ objectFit: "cover", opacity: 0.85 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,26,46,0.8), transparent)" }} />
                  <span style={{ position: "absolute", top: 12, left: 12, background: product.badgeColor, color: "#000", fontSize: 9, fontWeight: 900, fontFamily: "Inter, sans-serif", padding: "4px 10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>{product.badge}</span>
                </div>
                <div style={{ padding: "20px 20px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", margin: "0 0 8px 0" }}>{product.category}</p>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 900, color: "#fff", margin: "0 0 auto 0", lineHeight: 1.2 }}>{product.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 900, color: "#fff" }}>${product.price.toLocaleString()}</span>
                    <button onClick={() => handleAdd(product)} style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: added === product.id ? "#22c55e" : "#00C8F0", color: added === product.id ? "#fff" : "#000", border: "none", cursor: "pointer", transition: "all 0.2s" }}>
                      {added === product.id ? <Check size={14} /> : <Plus size={14} />}
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
