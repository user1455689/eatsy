"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

/* ---------------- TYPES ---------------- */

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
};

/* ---------------- CONTEXT ---------------- */

const CartContext = createContext<CartContextType | null>(
  null
);

/* ---------------- PROVIDER ---------------- */

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🟢 Cart exists ONLY in memory
  const [cart, setCart] = useState<CartItem[]>([]);

  /* ---------------- ACTIONS ---------------- */

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size
      );

      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
              }
            : i
        );
      }

      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const updateQty = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, qty),
            }
          : item
      )
    );
  };

  /* 🧹 CLEAR CART (CALL AFTER ORDER SUCCESS) */
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }
  return ctx;
}
