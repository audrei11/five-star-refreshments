export default function Footer() {
  return (
    <footer className="bg-[#050709] border-t border-[#1E3050] py-12 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span
          className="text-white font-black text-2xl uppercase tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          NEX<span style={{ color: "#00C8F0" }}>CORE</span>
        </span>
        <p className="text-white/20 text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
          © 2026 NEXCORE. Built for Legends. All rights reserved.
        </p>
        <div className="flex gap-8">
          {["Privacy", "Terms", "Support"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/25 text-xs tracking-widest uppercase hover:text-white/60 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
