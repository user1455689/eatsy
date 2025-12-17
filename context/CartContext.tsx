"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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

const CartContext = createContext<CartContextType | null>(null);

/* ---------------- PROVIDER ---------------- */

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  /* 🔹 LOAD CART FROM localStorage ON APP LOAD */
  useEffect(() => {
    const savedCart = localStorage.getItem("eatsy-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        setCart([]);
      }
    }
  }, []);

  /* 🔹 SAVE CART TO localStorage WHENEVER IT CHANGES */
  useEffect(() => {
    localStorage.setItem("eatsy-cart", JSON.stringify(cart));
  }, [cart]);

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
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, quantity: Math.max(1, qty) }
          : i
      )
    );
  };

  /* 🔹 CLEAR CART AFTER ORDER */
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("eatsy-cart");
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
