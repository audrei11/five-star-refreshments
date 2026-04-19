"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0D1117] py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#0066FF] opacity-[0.05] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00D4FF]" />
            <span className="text-[#00D4FF] text-xs font-bold tracking-[0.3em] uppercase">Contact</span>
          </div>
          <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            BUILD WITH <span className="text-[#00D4FF]">US</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-white/40 leading-relaxed">
              Need help choosing components or planning your build? Our PC experts are ready to help you spec the perfect machine.
            </p>
            {[
              { icon: Phone, label: "Phone", value: "+1 (800) NEX-CORE", color: "#00D4FF" },
              { icon: Mail, label: "Email", value: "builds@nexcore.gg", color: "#0066FF" },
              { icon: Globe, label: "Website", value: "www.nexcore.gg", color: "#00D4FF" },
              { icon: MapPin, label: "Location", value: "San Francisco, CA 94105", color: "#0066FF" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#00D4FF]/10"
                  style={{ borderColor: item.color + "40" }}>
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-white/20 text-xs tracking-widest uppercase mb-0.5">{item.label}</p>
                  <p className="text-white/70 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {["First Name", "Last Name"].map((p) => (
                <input key={p} type="text" placeholder={p}
                  className="bg-[#080B0F] border border-white/5 px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00D4FF]/50 transition-colors" />
              ))}
            </div>
            <input type="email" placeholder="Email Address"
              className="w-full bg-[#080B0F] border border-white/5 px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00D4FF]/50 transition-colors" />
            <select className="w-full bg-[#080B0F] border border-white/5 px-4 py-3 text-white/40 text-sm focus:outline-none focus:border-[#00D4FF]/50 transition-colors">
              <option>Budget Range</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $2,500</option>
              <option>$2,500 - $5,000</option>
              <option>$5,000+</option>
            </select>
            <textarea placeholder="Tell us about your build goals..." rows={4}
              className="w-full bg-[#080B0F] border border-white/5 px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00D4FF]/50 transition-colors resize-none" />
            <button type="submit"
              className="w-full bg-[#00D4FF] text-black font-black py-4 text-sm tracking-widest uppercase hover:bg-white transition-all duration-300">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
