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

  if (!food) {
    return (
      <div className="p-6 text-black">
        Food not found
      </div>
    );
  }

  const cartItem = {
    id: food.id,
    name: food.name,
    price: food.price,
    image: food.image,
    quantity: qty,
    size: "Regular", // ✅ fixed value (safe)
  };

  return (
    <div className="pb-28 bg-[#FFF5EE] min-h-screen text-black">
      {/* IMAGE */}
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

      {/* CONTENT */}
      <div className="p-5">
        <h1 className="text-2xl font-bold">
          {food.name}
        </h1>

        <div className="text-sm text-gray-600 mt-1">
          ⭐ {food.rating} • {food.time}
        </div>

        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          {food.description}
        </p>

        {/* QUANTITY */}
        <h3 className="mt-6 font-semibold">
          Quantity
        </h3>

        <div className="flex items-center gap-5 mt-3">
          <button
            onClick={() =>
              setQty((q) => Math.max(1, q - 1))
            }
            className="w-9 h-9 rounded-full bg-white shadow text-xl"
          >
            −
          </button>

          <span className="text-lg font-semibold">
            {qty}
          </span>

          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-9 h-9 rounded-full bg-white shadow text-xl"
          >
            +
          </button>
        </div>
      </div>

      {/* STICKY ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex gap-3">
        <button
          onClick={() => addToCart(cartItem)}
          className="flex-1 border border-[#FF6A3D] text-[#FF6A3D] rounded-full py-3 font-semibold active:scale-95"
        >
          Add to Cart
        </button>

        <button
          onClick={() => {
            addToCart(cartItem);
            router.push("/cart");
          }}
          className="flex-1 bg-[#FF6A3D] text-white rounded-full py-3 font-semibold active:scale-95"
        >
          Order Now (COD)
        </button>
      </div>
    </div>
  );
}
