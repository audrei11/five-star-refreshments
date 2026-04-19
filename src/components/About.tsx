"use client";
import { motion } from "framer-motion";

const values = [
  { title: "Valued", color: "#FEC100" },
  { title: "Connected", color: "#FF2124" },
  { title: "Recharged", color: "#2E4EF7" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Blob decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FEC100] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-80" />
      <div className="absolute bottom-0 right-0 w-80 h-48 bg-[#FF2124] rounded-tl-full opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#FEC100] text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Vision
          </span>
          <h2
            className="text-5xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            We are the great{" "}
            <span className="text-[#FEC100]">break-bringers!</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Five Star Refreshments wants every person to feel valued, connected and recharged from every single break. Every day we bring our customers what they need, when they need it, for great breaks.
          </p>

          <div className="flex flex-wrap gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="px-6 py-3 rounded-full font-bold text-black text-sm"
                style={{ backgroundColor: v.color }}
              >
                {v.title}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { stat: "500+", label: "Happy Clients", color: "#FEC100" },
            { stat: "5★", label: "Quality Rating", color: "#FF2124" },
            { stat: "10+", label: "Years Experience", color: "#2E4EF7" },
            { stat: "24/7", label: "Support", color: "#FEC100" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111] border border-white/10 rounded-3xl p-6 text-center"
            >
              <div
                className="text-4xl font-black mb-2"
                style={{ color: item.color, fontFamily: "Fraunces, serif" }}
              >
                {item.stat}
              </div>
              <div className="text-white/50 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
