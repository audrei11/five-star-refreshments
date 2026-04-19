"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Marcus Chen", role: "Pro Esports Player", text: "NEXCORE delivered exactly what they promised. My RTX 4090 arrived in perfect condition. The performance is absolutely insane — nothing else comes close.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80" },
  { name: "Alex Rivera", role: "3D Artist & Creator", text: "I've built 6 PCs over the years and NEXCORE is the only store I'll ever use. Component quality and customer support is unmatched in the entire industry. Period.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80" },
  { name: "Jordan Kim", role: "Software Engineer", text: "Ordered a full $3,500 build and it arrived in 2 days, packed perfectly. The team knows their hardware inside out. Will never shop anywhere else. Absolute legends.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&q=80" },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#07090F", padding: "128px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: "#00C8F0" }} />
            <span style={{ color: "#00C8F0", fontSize: 11, fontFamily: "Inter, sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600 }}>Testimonials</span>
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 52, fontWeight: 900, color: "#fff", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
            TRUSTED BY <span style={{ color: "#00C8F0" }}>LEGENDS</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,200,240,0.1)" }}
              style={{ background: "#0F1A2E", border: "1px solid #1E3A5F", padding: 36, display: "flex", flexDirection: "column" }}
            >
              <Quote size={26} color="#00C8F0" style={{ opacity: 0.4, marginBottom: 16 }} />
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={12} color="#00C8F0" fill="#00C8F0" />)}
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, fontFamily: "Inter, sans-serif", fontWeight: 300, flex: 1, marginBottom: 28, margin: "0 0 28px 0" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 20, borderTop: "1px solid #1E3A5F" }}>
                <img src={t.avatar} alt={t.name} style={{ width: 44, height: 44, objectFit: "cover", flexShrink: 0 }} />
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, fontFamily: "Inter, sans-serif", margin: "0 0 2px 0" }}>{t.name}</p>
                  <p style={{ color: "rgba(0,200,240,0.6)", fontSize: 12, fontFamily: "Inter, sans-serif", margin: 0 }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
