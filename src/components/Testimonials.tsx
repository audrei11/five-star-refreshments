"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Professional Esports Player",
    text: "NEXCORE delivered exactly what they promised. My RTX 4090 arrived in perfect condition and the performance is absolutely insane. No one else comes close.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    color: "#00D4FF",
  },
  {
    name: "Alex Rivera",
    role: "3D Artist & Creator",
    text: "I've built 6 PCs over the years and NEXCORE is the only store I'll use. The component quality and customer support is unmatched in the industry.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    color: "#0066FF",
  },
  {
    name: "Jordan Kim",
    role: "Software Engineer",
    text: "Ordered a full build worth $3,500 and it was delivered in 2 days, packed perfectly. The NEXCORE team knows their hardware inside out.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
    color: "#00D4FF",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#080B0F] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00D4FF]" />
            <span className="text-[#00D4FF] text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
          </div>
          <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            TRUSTED BY <span className="text-[#00D4FF]">LEGENDS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#0D1117] border border-white/5 p-8 hover:border-[#00D4FF]/20 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00D4FF]/0 group-hover:border-[#00D4FF] transition-all duration-300" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-[#00D4FF] fill-[#00D4FF]" />)}
              </div>
              <p className="text-white/50 leading-relaxed text-sm mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 object-cover rounded-none border" style={{ borderColor: t.color }} />
                <div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
