import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080B0F] border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00D4FF] flex items-center justify-center">
            <Zap size={14} className="text-black fill-black" />
          </div>
          <span className="text-white font-black tracking-widest uppercase text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            NEX<span className="text-[#00D4FF]">CORE</span>
          </span>
        </div>
        <p className="text-white/20 text-xs tracking-widest uppercase text-center">
          © 2026 NEXCORE. Built for Legends. All rights reserved.
        </p>
        <div className="flex gap-3">
          {["#00D4FF", "#0066FF", "#ffffff"].map((color) => (
            <div key={color} className="w-2 h-2" style={{ backgroundColor: color, opacity: color === "#ffffff" ? 0.2 : 1 }} />
          ))}
        </div>
      </div>
    </footer>
  );
}
