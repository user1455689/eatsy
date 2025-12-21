"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function OrderSuccessPage() {
  useEffect(() => {
    const data = sessionStorage.getItem("whatsappOrder");

    if (!data) return;

    const { name, phone, address, cart, total } =
      JSON.parse(data);

    const itemsText = cart
      .map(
        (i: any) =>
          `• ${i.name} (${i.size}) x${i.quantity}`
      )
      .join("\n");

    const message = `
New Food Order 🍽️

Name: ${name}
Phone: ${phone}
Address: ${address}

Items:
${itemsText}

Total: Rs. ${total}
Payment: Cash on Delivery
    `.trim();

    // ⏳ Wait for animation (2 seconds)
    const timer = setTimeout(() => {
      const url = `https://wa.me/9779746571404?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");

      // cleanup
      sessionStorage.removeItem("whatsappOrder");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FFF7F2] text-center px-6">
      {/* 🎉 */}
      <div className="text-6xl mb-4 animate-bounce">
        🎉
      </div>

      <h1 className="text-2xl font-bold mb-2">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mb-6">
        Preparing your food 🍳<br />
        Redirecting to WhatsApp…
      </p>

      {/* 🚴 Delivery animation */}
      <div className="relative w-full h-24 overflow-hidden mb-6">
        <div className="absolute left-[-60px] text-4xl animate-delivery">
          🛵🍕
        </div>
        <div className="absolute right-4 bottom-0 text-3xl">
          🏠
        </div>
      </div>

      <Link
        href="/home"
        className="bg-[#FF7A45] text-white px-6 py-3 rounded-full font-semibold"
      >
        Order More Food
      </Link>

      <style jsx>{`
        .animate-delivery {
          animation: ride 2s linear infinite;
        }
        @keyframes ride {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(120vw);
          }
        }
      `}</style>
    </div>
  );
}
