"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQty, clearCart, total, count } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={toggleCart} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-[420px] z-50 bg-[#0B1018] border-l border-white/5 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-[#00C8F0]" />
                <span className="text-white font-black text-lg tracking-wide uppercase"
                  style={{ fontFamily: "Barlow Condensed, sans-serif" }}>
                  Your Build
                </span>
                <span className="bg-[#00C8F0] text-black text-xs font-bold w-5 h-5 flex items-center justify-center">
                  {count()}
                </span>
              </div>
              <button onClick={toggleCart} className="text-white/30 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                  <ShoppingBag size={40} className="text-white/10" />
                  <div>
                    <p className="text-white/30 text-lg font-black uppercase tracking-widest mb-2"
                      style={{ fontFamily: "Barlow Condensed, sans-serif" }}>
                      Build is empty
                    </p>
                    <p className="text-white/20 text-xs">Add some hardware to get started</p>
                  </div>
                  <button onClick={toggleCart}
                    className="bg-[#00C8F0] text-black font-semibold text-xs px-6 py-3 tracking-widest uppercase hover:bg-white transition-colors">
                    Browse Hardware
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div key={item.id} layout
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex gap-4 bg-[#06090E] border border-white/5 p-4 hover:border-white/10 transition-colors">
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-[#0B1018]">
                      <Image src={item.image} alt={item.name} fill className="object-cover opacity-80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm leading-tight mb-0.5 truncate"
                        style={{ fontFamily: "Barlow Condensed, sans-serif" }}>{item.name}</p>
                      <p className="text-white/30 text-xs mb-2">{item.category}</p>
                      <p className="text-[#00C8F0] font-black text-sm">${item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeItem(item.id)} className="text-white/15 hover:text-red-400 transition-colors">
                        <Trash2 size={13} />
                      </button>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-white/5 flex items-center justify-center hover:bg-[#00C8F0] hover:text-black transition-all text-white/50">
                          <Minus size={10} />
                        </button>
                        <span className="text-white text-sm w-4 text-center font-medium">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-white/5 flex items-center justify-center hover:bg-[#00C8F0] hover:text-black transition-all text-white/50">
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-sm text-white/40">
                  <span>Subtotal</span><span className="text-white">${total().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-white/40">
                  <span>Shipping</span><span className="text-green-400 font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-baseline pt-4 border-t border-white/5">
                  <span className="text-white font-black text-xl uppercase tracking-wide"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}>Total</span>
                  <span className="text-[#00C8F0] font-black text-3xl"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}>
                    ${total().toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-[#00C8F0] text-black font-semibold py-4 text-sm tracking-widest uppercase hover:bg-white transition-colors duration-200">
                  Checkout — ${total().toFixed(2)}
                </button>
                <button onClick={clearCart}
                  className="w-full text-white/20 text-xs tracking-widest uppercase hover:text-white/40 transition-colors py-2">
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
