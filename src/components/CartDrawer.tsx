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
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[#0a0a0a] border-l border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-[#FEC100]" />
                <h2 className="text-white font-black text-lg" style={{ fontFamily: "Fraunces, serif" }}>
                  Your Cart
                </h2>
                <span className="bg-[#FEC100] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {count()}
                </span>
              </div>
              <button onClick={toggleCart} className="text-white/50 hover:text-white transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={60} className="text-white/10" />
                  <p className="text-white/30 text-lg" style={{ fontFamily: "Fraunces, serif" }}>Your cart is empty</p>
                  <p className="text-white/20 text-sm">Add some products to get started!</p>
                  <button
                    onClick={toggleCart}
                    className="bg-[#FEC100] text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-[#FF2124] hover:text-white transition-all"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 bg-white/5 rounded-2xl p-4 border border-white/5"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm truncate">{item.name}</p>
                      <p className="text-white/40 text-xs">{item.category}</p>
                      <p className="text-[#FEC100] font-black text-sm mt-1">${item.price}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button onClick={() => removeItem(item.id)} className="text-white/20 hover:text-[#FF2124] transition-colors">
                        <Trash2 size={14} />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FEC100] hover:text-black transition-all"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-white text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FEC100] hover:text-black transition-all"
                        >
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
              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Subtotal</span>
                  <span className="text-white font-bold">${total().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Delivery</span>
                  <span className="text-green-400 font-bold text-sm">Free</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-white font-black text-lg" style={{ fontFamily: "Fraunces, serif" }}>Total</span>
                  <span className="text-[#FEC100] font-black text-2xl" style={{ fontFamily: "Fraunces, serif" }}>
                    ${total().toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-[#FEC100] text-black font-bold py-4 rounded-full text-base hover:bg-[#FF2124] hover:text-white transition-all duration-300 hover:scale-[1.02]">
                  Checkout — ${total().toFixed(2)}
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-white/30 text-sm hover:text-white/60 transition-colors"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
