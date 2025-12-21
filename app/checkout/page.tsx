"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Redirect if cart is empty
  if (cart.length === 0) {
    router.push("/home");
    return null;
  }

  /* ---------------- SEND ORDER TO MAKE ---------------- */
  const sendOrderToMake = async () => {
    try {
      await fetch(
        "https://hook.eu1.make.com/js24ep6zbexlcs2g7tifuigvy7v7n1dt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: Date.now(),
            name,
            phone,
            address,
            items: cart.map(
              (i) =>
                `${i.name} (${i.size}) x${i.quantity}`
            ),
            total,
            payment: "COD",
            time: new Date().toLocaleString(),
          }),
        }
      );
    } catch (error) {
      console.error("Make webhook error", error);
    }
  };

  /* ---------------- SEND ORDER TO WHATSAPP ---------------- */
  const sendOrderToWhatsApp = () => {
    const itemsText = cart
      .map(
        (i) =>
          `• ${i.name} (${i.size}) x${i.quantity}`
      )
      .join("%0A");

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

    const whatsappUrl = `https://wa.me/9779746571404?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  /* ---------------- PLACE ORDER ---------------- */
  const placeOrder = async () => {
    if (!name || !phone || !address) {
      alert("Please fill all delivery details");
      return;
    }

    await sendOrderToMake();   // Google Sheets
    sendOrderToWhatsApp();     // WhatsApp
    clearCart();               // Clear cart
    router.push("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] p-5 pb-28 text-gray-800">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4 text-gray-900">
        Checkout
      </h1>

      {/* Delivery Details */}
      <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <h3 className="font-semibold mb-3 text-gray-900">
          Delivery Details
        </h3>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-300"
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-300"
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 resize-none"
          rows={3}
        />
      </div>

      {/* Payment */}
      <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <h3 className="font-semibold mb-2 text-gray-900">
          Payment Method
        </h3>
        <div className="flex items-center gap-2 text-[#FF6A3D] font-semibold">
          <input type="radio" checked readOnly />
          <span>Cash on Delivery</span>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>
      </div>

      {/* Place Order */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button
          onClick={placeOrder}
          className="w-full bg-[#FF6A3D] text-white py-3 rounded-full font-semibold active:scale-95"
        >
          Place Order (COD)
        </button>
      </div>
    </div>
  );
}
