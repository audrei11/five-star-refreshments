"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#111] py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#2E4EF7] rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#FEC100] text-sm font-medium tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Start Your <span className="text-[#FEC100]">Free Trial</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Let us bring the quality break experience to your workplace. Contact us today!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "Phone", value: "604.FRE.SHHH (604.373.7444)", color: "#FEC100" },
              { icon: Mail, label: "Email", value: "dreddy@fivestarrefreshments.com", color: "#FF2124" },
              { icon: Globe, label: "Website", value: "www.fivestarrefreshments.com", color: "#2E4EF7" },
              { icon: MapPin, label: "Address", value: "8th Floor, 543 Granville Street, Vancouver, BC V6C 1X8", color: "#FEC100" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: item.color + "20" }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FEC100] transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-black border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FEC100] transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FEC100] transition-colors"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FEC100] transition-colors"
            />
            <textarea
              placeholder="Tell us about your needs..."
              rows={4}
              className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FEC100] transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#FEC100] text-black font-bold py-4 rounded-full text-base hover:bg-[#FF2124] hover:text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Start My Free Trial
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
