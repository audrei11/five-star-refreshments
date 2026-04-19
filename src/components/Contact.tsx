"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0B1220] py-32 px-8">
      <div className="max-w-screen-xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#00C8F0]" />
            <span className="text-[#00C8F0] text-xs font-semibold tracking-[0.3em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>Free Consultation</span>
          </div>
          <h2 className="text-white font-black uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "52px", lineHeight: 1 }}>
            GET YOUR CUSTOM<br /><span style={{ color: "#00C8F0" }}>PC BUILD — FREE.</span>
          </h2>
          <p className="text-white/45 text-base leading-relaxed max-w-xl" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
            Tell us your budget and goals. Our PC experts will spec the perfect machine — no commitment required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-14">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-7">
            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 px-5 py-4">
              <Clock size={16} color="#00C8F0" className="flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Response within 24 hours</p>
                <p className="text-white/35 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>No commitment · No spam</p>
              </div>
            </div>
            {[
              { icon: Phone, label: "Phone", value: "+1 (800) NEX-CORE" },
              { icon: Mail, label: "Email", value: "builds@nexcore.gg" },
              { icon: MapPin, label: "Location", value: "San Francisco, CA 94105" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/[0.04]">
                  <item.icon size={17} color="#00C8F0" />
                </div>
                <div>
                  <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</p>
                  <p className="text-white/70 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={(e) => e.preventDefault()} className="md:col-span-3 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {["First Name", "Last Name"].map((p) => (
                <input key={p} type="text" placeholder={p} style={{ fontFamily: "Inter, sans-serif" }}
                  className="bg-white/[0.04] border border-white/10 px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00C8F0]/60 transition-colors" />
              ))}
            </div>
            <input type="email" placeholder="Email Address" style={{ fontFamily: "Inter, sans-serif" }}
              className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00C8F0]/60 transition-colors" />
            <select style={{ fontFamily: "Inter, sans-serif" }}
              className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 text-white/40 text-sm focus:outline-none focus:border-[#00C8F0]/60 transition-colors appearance-none cursor-pointer">
              <option>Budget Range</option>
              <option>$500 – $1,000</option>
              <option>$1,000 – $2,500</option>
              <option>$2,500 – $5,000</option>
              <option>$5,000+</option>
            </select>
            <textarea placeholder="Tell us about your build goals, use case, or games you play..." rows={5} style={{ fontFamily: "Inter, sans-serif" }}
              className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00C8F0]/60 transition-colors resize-none" />
            <button type="submit" style={{ fontFamily: "Inter, sans-serif" }}
              className="w-full bg-[#00C8F0] text-black font-black py-4 text-sm tracking-widest uppercase hover:bg-white transition-all duration-200 shadow-[0_0_25px_rgba(0,200,240,0.25)] flex items-center justify-center gap-3">
              Start My Build <ArrowRight size={16} />
            </button>
            <p className="text-center text-white/25 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              No commitment required · Response within 24 hours · 100% free
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
