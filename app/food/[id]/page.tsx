"use client";

import { useParams, useRouter } from "next/navigation";
import { foods } from "@/data/foods";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function FoodDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const food = foods.find((f) => f.id === id);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<"Small" | "Half" | "Full">("Half");

  if (!food) return <div className="p-6 text-gray-800">Food not found</div>;

  const cartItem = {
    id: food.id,
    name: food.name,
    price: food.price,
    image: food.image,
    quantity: qty,
    size,
  };

  return (
    <div className="pb-28 bg-[#FFF5EE] min-h-screen">
      {/* Image */}
      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-64 object-cover"
        />

        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow"
        >
          ←
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-gray-900">
          {food.name}
        </h1>

        {/* META */}
        <div className="text-sm text-gray-600 mt-1">
          ⭐ {food.rating} • {food.time}
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          {food.description}
        </p>

        {/* SIZE */}
        <h3 className="mt-6 font-semibold text-gray-800">
          Size
        </h3>
        <div className="flex gap-3 mt-2">
          {(["Small", "Half", "Full"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-4 py-2 rounded-full border font-medium transition ${
                size === s
                  ? "bg-[#FF6A3D] text-white border-[#FF6A3D]"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* QUANTITY */}
        <h3 className="mt-6 font-semibold text-gray-800">
          Quantity
        </h3>
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-8 h-8 rounded-full bg-white text-gray-800 shadow"
          >
            −
          </button>
          <span className="font-semibold text-gray-900">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-8 h-8 rounded-full bg-white text-gray-800 shadow"
          >
            +
          </button>
        </div>
      </div>

      {/* STICKY ACTION */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex gap-3">
        <button
          onClick={() => addToCart(cartItem)}
          className="flex-1 border border-[#FF6A3D] text-[#FF6A3D] rounded-full py-3 font-semibold transition active:scale-95"
        >
          Add to Cart
        </button>

        <button
          onClick={() => {
            addToCart(cartItem);
            router.push("/cart");
          }}
          className="flex-1 bg-[#FF6A3D] text-white rounded-full py-3 font-semibold transition active:scale-95"
        >
          Order Now (COD)
        </button>
      </div>
    </div>
  );
}
