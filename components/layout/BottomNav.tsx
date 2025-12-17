"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  Home,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const { cart } = useCart();

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const navItem = (
    href: string,
    Icon: any,
    showBadge?: boolean
  ) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`
          relative flex flex-col items-center gap-1
          transition active:scale-95
          ${isActive ? "text-[#FF6A3D]" : "text-gray-500"}
        `}
      >
        <Icon
          size={22}
          className={`transition ${isActive ? "scale-110" : ""}`}
        />

        {/* Cart badge ONLY when count > 0 */}
        {showBadge && count > 0 && (
          <span
            className="
              absolute -top-2 -right-3
              bg-[#FF6A3D]
              text-white
              text-xs
              min-w-[18px] h-[18px]
              flex items-center justify-center
              rounded-full
              animate-softPulse
            "
          >
            {count}
          </span>
        )}
      </Link>
    );
  };

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0
        bg-white
        border-t
        shadow-[0_-4px_20px_rgba(0,0,0,0.06)]
        flex justify-around
        py-3
        z-50
      "
    >
      {navItem("/home", Home)}
      {navItem("/favorites", Heart)}
      {navItem("/cart", ShoppingCart, true)}
      {navItem("/profile", User)}
    </div>
  );
}
