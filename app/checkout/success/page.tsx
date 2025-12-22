"use client";

import { useEffect } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import deliveryAnimation from "@/public/lottie/Delivery guy.json";

export default function OrderSuccessPage() {
  useEffect(() => {
    const data = sessionStorage.getItem("whatsappOrder");
    if (!data) return;

    const { name, phone, address, cart, total } = JSON.parse(data);

    const itemsText = cart
      .map(
        (i: any) =>
          `• ${i.name} (${i.size}) x${i.quantity}`
      )
      .join("\n");

    const message = `
🛎️ *NEW FOOD ORDER*

👤 Name: ${name}
📞 Phone: ${phone}

📍 Address:
${address}

🍽️ Items:
${itemsText}

💰 Total: Rs. ${total}
💳 Payment: Cash on Delivery
🕒 Time: ${new Date().toLocaleString()}
    `.trim();

    const timer = setTimeout(() => {
      const url = `https://wa.me/9779746571404?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");

      sessionStorage.removeItem("whatsappOrder");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FFF7F2] text-center px-6">
      {/* ✅ LOTTIE DELIVERY ANIMATION */}
      <div className="w-56 h-56 mb-4">
        <Lottie
          animationData={deliveryAnimation}
          loop
          autoplay
        />
      </div>

      <h1 className="text-2xl font-bold mb-2">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mb-6">
        Your food is on the way 🚴‍♂️<br />
        Redirecting to WhatsApp…
      </p>

      <Link
        href="/home"
        className="bg-[#FF7A45] text-white px-6 py-3 rounded-full font-semibold"
      >
        Order More Food
      </Link>
    </div>
  );
}
