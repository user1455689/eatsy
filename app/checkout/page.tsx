"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    router.push("/home");
    return null;
  }

  const placeOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    console.log({
      name,
      phone,
      address,
      cart,
      total,
      payment: "COD",
    });

    router.push("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] p-5 pb-28 text-gray-800">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4 text-gray-900">
        Checkout
      </h1>

      {/* Customer Info */}
      <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <h3 className="font-semibold mb-3 text-gray-900">
          Delivery Details
        </h3>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            w-full mb-3 px-4 py-3
            rounded-xl
            border border-gray-300
            text-gray-800
            placeholder-gray-400
            outline-none
            focus:border-[#FF6A3D]
          "
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="
            w-full mb-3 px-4 py-3
            rounded-xl
            border border-gray-300
            text-gray-800
            placeholder-gray-400
            outline-none
            focus:border-[#FF6A3D]
          "
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="
            w-full px-4 py-3
            rounded-xl
            border border-gray-300
            text-gray-800
            placeholder-gray-400
            outline-none
            resize-none
            focus:border-[#FF6A3D]
          "
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
          className="
            w-full
            bg-[#FF6A3D]
            text-white
            py-3
            rounded-full
            font-semibold
            transition
            active:scale-95
          "
        >
          Place Order (COD)
        </button>
      </div>
    </div>
  );
}
