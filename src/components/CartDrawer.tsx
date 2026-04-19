"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, Zap } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQty, clearCart, total, count } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={toggleCart} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[#080B0F] border-l border-[#00D4FF]/10 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-[#00D4FF]" />
                <h2 className="text-white font-black text-lg tracking-widest uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  Your Build
                </h2>
                <span className="bg-[#00D4FF] text-black text-xs font-black w-6 h-6 flex items-center justify-center">
                  {count()}
                </span>
              </div>
              <button onClick={toggleCart} className="text-white/30 hover:text-white transition-colors"><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <Zap size={48} className="text-white/5" />
                  <p className="text-white/20 text-lg font-black uppercase tracking-widest" style={{ fontFamily: "Rajdhani, sans-serif" }}>Build is empty</p>
                  <button onClick={toggleCart}
                    className="bg-[#00D4FF] text-black font-black px-6 py-3 text-xs tracking-widest uppercase hover:bg-white transition-all">
                    Browse Hardware
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div key={item.id} layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 bg-[#0D1117] border border-white/5 p-4 hover:border-[#00D4FF]/20 transition-all">
                    <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden bg-[#080B0F]">
                      <Image src={item.image} alt={item.name} fill className="object-cover opacity-80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm truncate" style={{ fontFamily: "Rajdhani, sans-serif" }}>{item.name}</p>
                      <p className="text-white/30 text-xs">{item.category}</p>
                      <p className="text-[#00D4FF] font-black text-sm mt-1">${item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button onClick={() => removeItem(item.id)} className="text-white/20 hover:text-red-400 transition-colors"><Trash2 size={13} /></button>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-white/5 flex items-center justify-center hover:bg-[#00D4FF] hover:text-black transition-all">
                          <Minus size={10} />
                        </button>
                        <span className="text-white text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-white/5 flex items-center justify-center hover:bg-[#00D4FF] hover:text-black transition-all">
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/30">Subtotal</span>
                  <span className="text-white">${total().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/30">Shipping</span>
                  <span className="text-green-400 font-bold">FREE</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-4">
                  <span className="text-white font-black text-lg uppercase tracking-widest" style={{ fontFamily: "Rajdhani, sans-serif" }}>Total</span>
                  <span className="text-[#00D4FF] font-black text-2xl" style={{ fontFamily: "Rajdhani, sans-serif" }}>${total().toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#00D4FF] text-black font-black py-4 text-sm tracking-widest uppercase hover:bg-white transition-all duration-300">
                  Checkout — ${total().toFixed(2)}
                </button>
                <button onClick={clearCart} className="w-full text-white/20 text-xs tracking-widest uppercase hover:text-white/40 transition-colors">
                  Clear Build
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
