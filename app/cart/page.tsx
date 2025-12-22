"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* ---------------- EMPTY CART ---------------- */
  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#FFF5EE] text-center px-6">
        <p className="mb-4 text-gray-700 font-medium">
          Your cart is empty
        </p>
        <Link
          href="/home"
          className="text-[#FF6A3D] font-semibold"
        >
          Browse food
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF5EE] p-5 pb-36 text-gray-800">
      {/* Title */}
      <h1 className="text-xl font-bold mb-2 text-gray-900">
        Your Cart
      </h1>

      {/* Add more items */}
      <Link
        href="/home"
        className="
          inline-flex items-center gap-1
          text-sm font-semibold
          text-[#FF6A3D]
          mb-4
        "
      >
        + Add more items
      </Link>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-3 mb-3 flex gap-3 shadow-sm"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded-xl object-cover"
          />

          {/* Info */}
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-gray-900">
              {item.name}
            </h3>

            <p className="font-bold text-[#FF6A3D] mt-1">
              Rs. {item.price}
            </p>
          </div>

          {/* Quantity + Remove */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() =>
                updateQty(item.id, item.quantity + 1)
              }
              className="w-7 h-7 bg-gray-100 text-gray-800 rounded-full font-semibold"
            >
              +
            </button>

            <span className="text-sm font-semibold text-gray-900">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                updateQty(item.id, item.quantity - 1)
              }
              className="w-7 h-7 bg-gray-100 text-gray-800 rounded-full font-semibold"
            >
              −
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-xs text-red-500 mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-between font-semibold text-gray-900 mb-3">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>

        <div className="flex gap-3">
          {/* Add more food */}
          <Link
            href="/home"
            className="
              flex-1 text-center
              border border-[#FF6A3D]
              text-[#FF6A3D]
              py-3
              rounded-full
              font-semibold
            "
          >
            Add More
          </Link>

          {/* Checkout */}
          <Link
            href="/checkout"
            className="
              flex-1 text-center
              bg-[#FF6A3D]
              text-white
              py-3
              rounded-full
              font-semibold
              transition
              active:scale-95
            "
          >
            Checkout (COD)
          </Link>
        </div>
      </div>
    </div>
  );
}
