"use client";

import Lottie from "lottie-react";
import deliveryAnimation from "@/public/lottie/Delivery guy.json";

export default function OrderAnimation() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#FFF5EE] flex flex-col items-center justify-center">
      <div className="w-64 h-64">
        <Lottie animationData={deliveryAnimation} loop />
      </div>

      <p className="mt-4 text-lg font-semibold text-gray-800">
        Your order is on the way 🚴‍♂️
      </p>
      <p className="text-sm text-gray-600">
        Redirecting to WhatsApp…
      </p>
    </div>
  );
}
