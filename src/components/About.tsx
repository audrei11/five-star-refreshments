"use client";
import { motion } from "framer-motion";
import { Cpu, Shield, Truck, Headphones } from "lucide-react";

const features = [
  { icon: Cpu, title: "Top-Tier Components", desc: "Only the highest-grade hardware from the world's leading manufacturers — tested, verified, and ready to perform." },
  { icon: Shield, title: "2-Year Warranty", desc: "Every product backed by our comprehensive warranty and dedicated priority support program." },
  { icon: Truck, title: "Free Fast Shipping", desc: "Free express shipping on all orders. Delivered in 2–3 business days, fully insured, guaranteed." },
  { icon: Headphones, title: "Expert Support", desc: "Our PC build specialists are available 24/7 to help you spec the perfect rig for your budget and goals." },
];

const card = { background: "#0F1A2E", border: "1px solid #1E3A5F" };

export default function About() {
  return (
    <section id="specs" style={{ background: "#0B1220", padding: "128px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 1, background: "#00C8F0" }} />
              <span style={{ color: "#00C8F0", fontSize: 11, fontFamily: "Inter, sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600 }}>Why NEXCORE</span>
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 52, lineHeight: 1, fontWeight: 900, color: "#fff", textTransform: "uppercase", margin: 0 }}>
              ENGINEERED<br />FOR <span style={{ color: "#00C8F0" }}>LEGENDS</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.7, fontFamily: "Inter, sans-serif", fontWeight: 300, marginBottom: 32 }}>
              We don't just sell hardware. We curate the absolute best components tested by professionals, so you can build the machine of your dreams with complete confidence.
            </p>
            <a href="#products" style={{ display: "inline-block", background: "#00C8F0", color: "#000", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 12, padding: "14px 32px", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none" }}>
              Shop Now
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
          {[["10,000+", "Builds Completed"], ["4.9 / 5", "Customer Rating"], ["50+", "Top Brands"], ["24 / 7", "Expert Support"]].map(([val, label]) => (
            <div key={label} style={{ ...card, padding: 28 }}>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 38, fontWeight: 900, color: "#00C8F0", margin: "0 0 8px 0", lineHeight: 1 }}>{val}</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", margin: 0 }}>{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,200,240,0.12)" }}
              style={{ ...card, padding: 32, cursor: "default", transition: "border-color 0.3s" }}
            >
              <div style={{ width: 44, height: 44, border: "1px solid #1E3A5F", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <f.icon size={19} color="#00C8F0" />
              </div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 900, color: "#fff", margin: "0 0 10px 0", letterSpacing: "0.02em" }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.65, fontFamily: "Inter, sans-serif", fontWeight: 300, margin: 0 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
