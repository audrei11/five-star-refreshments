export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FEC100] rounded-full flex items-center justify-center">
            <span className="text-black font-black text-sm" style={{ fontFamily: "serif" }}>S</span>
          </div>
          <span className="text-white font-bold text-sm">five.star refreshments</span>
        </div>
        <p className="text-white/30 text-sm text-center">
          © 2026 Five Star Refreshments. Because you deserve a quality break.
        </p>
        <div className="flex gap-4">
          {["#FEC100", "#FF2124", "#2E4EF7"].map((color) => (
            <div key={color} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </footer>
  );
}
