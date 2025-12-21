"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderSuccessPage() {
  const [showRider, setShowRider] = useState(false);

  useEffect(() => {
    // start animation slightly after page loads
    const timer = setTimeout(() => {
      setShowRider(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FFF7F2] p-6 text-center overflow-hidden relative">
      {/* 🎉 Success Icon */}
      <div className="text-6xl mb-4 animate-bounce">
        🎉
      </div>

      <h1 className="text-2xl font-bold mb-2 text-gray-900">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mb-6">
        Your food is on the way 🚀
        <br />
        Please keep cash ready.
      </p>

      {/* 🚴 Delivery Animation */}
      <div className="w-full h-24 relative mb-8 overflow-hidden">
        {showRider && (
          <div className="delivery-rider text-4xl">
            🛵🍕
          </div>
        )}

        {/* Destination */}
        <div className="absolute right-2 bottom-0 text-3xl">
          🏠
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/home"
        className="
          bg-[#FF7A45]
          text-white
          px-6
          py-3
          rounded-full
          font-semibold
          transition
          active:scale-95
        "
      >
        Order More Food
      </Link>

      {/* Animation Styles */}
      <style jsx>{`
        .delivery-rider {
          position: absolute;
          left: -60px;
          bottom: 0;
          animation: ride 4s linear infinite;
        }

        @keyframes ride {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(120vw);
          }
        }
      `}</style>
    </div>
  );
}
