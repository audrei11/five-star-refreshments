"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Office Manager, TechCorp",
    text: "Five Star Refreshments completely transformed our office break room. The coffee quality is exceptional and the service is always on time!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
    color: "#FEC100",
  },
  {
    name: "James Rodriguez",
    role: "CEO, StartupHub",
    text: "Our team productivity went up after we started using Five Star. The snack selection is amazing and everyone loves the tea options!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    color: "#FF2124",
  },
  {
    name: "Emily Chen",
    role: "HR Director, FinanceCo",
    text: "Best workplace refreshment service we've ever used. Reliable, premium quality, and the free trial sold us immediately!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    color: "#2E4EF7",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#FEC100] text-sm font-medium tracking-widest uppercase mb-4 block">Reviews</span>
          <h2 className="text-5xl font-black text-white" style={{ fontFamily: "Fraunces, serif" }}>
            What our <span className="text-[#FEC100]">clients</span> say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col gap-6 hover:border-[#FEC100]/30 transition-all duration-300"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-[#FEC100] fill-[#FEC100]" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed text-sm flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: t.color }}>
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
