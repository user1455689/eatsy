"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Home, Heart, ShoppingBag, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const items: { href: string; icon: LucideIcon; label: string; badge?: boolean }[] = [
    { href: "/home", icon: Home, label: "Home" },
    { href: "/favorites", icon: Heart, label: "Fav" },
    { href: "/cart", icon: ShoppingBag, label: "Cart", badge: true },
    { href: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-3 left-3 right-3 z-50 rounded-3xl px-4 py-2 bottom-float">
      <div className="grid grid-cols-4">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={`relative soft-press rounded-2xl py-1 text-center ${active ? "text-[#FF6B4A]" : "text-gray-500"}`}>
              <Icon className={`mx-auto ${active ? "scale-110" : ""}`} size={20} />
              <p className="text-xs mt-1">{item.label}</p>
              {item.badge && count > 0 && <span className="absolute top-0 right-7 min-w-4 h-4 rounded-full bg-[#FF6B4A] text-white text-[10px] grid place-items-center">{count}</span>}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
