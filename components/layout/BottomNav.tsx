"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function BottomNav() {
  const { cart } = useCart();

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 z-50">
      <Link href="/home" className="text-[#FF6A3D]">
        🏠
      </Link>

      <span>❤️</span>

      <Link href="/cart" className="relative">
        🛒
        {count > 0 && (
          <span
            className="
              absolute -top-2 -right-3
              bg-[#FF6A3D]
              text-white
              text-xs
              w-5 h-5
              flex items-center justify-center
              rounded-full
            "
          >
            {count}
          </span>
        )}
      </Link>

      <span>👤</span>
    </div>
  );
}
