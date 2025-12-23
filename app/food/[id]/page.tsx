"use client";

import { useParams, useRouter } from "next/navigation";
import { foods } from "@/data/foods";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ArrowLeft } from "lucide-react";

export default function FoodDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const food = foods.find((f) => f.id === id);

  const [qty, setQty] = useState(1);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Food not found
      </div>
    );
  }

  const handleAdd = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity: qty,
    });
  };

  return (
    <div className="bg-[#FFF5EE] min-h-screen pb-28">
      {/* 🔝 IMAGE HEADER */}
      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-72 object-cover"
        />

        <button
          onClick={() => router.back()}
          className="
            absolute top-4 left-4
            bg-white/90 backdrop-blur
            p-2 rounded-full shadow
            active:scale-95
          "
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* 📄 CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-gray-900">
          {food.name}
        </h1>

        {/* META */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
          <span>⭐ {food.rating}</span>
          <span>•</span>
          <span>{food.time}</span>
        </div>

        {/* PRICE */}
        <p className="mt-3 text-xl font-bold text-[#16A34A]">
          Rs. {food.price}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          {food.description}
        </p>

        {/* QUANTITY */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Quantity
          </h3>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="
                w-10 h-10
                rounded-full
                bg-white
                shadow
                flex items-center justify-center
                active:scale-95
              "
            >
              <Minus size={16} />
            </button>

            <span className="text-lg font-semibold">
              {qty}
            </span>

            <button
              onClick={() => setQty((q) => q + 1)}
              className="
                w-10 h-10
                rounded-full
                bg-white
                shadow
                flex items-center justify-center
                active:scale-95
              "
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 🛒 STICKY ACTION BAR */}
      <div
        className="
          fixed bottom-0 left-0 right-0
          bg-white
          border-t
          p-4
          flex gap-3
          z-50
        "
      >
        <button
          onClick={handleAdd}
          className="
            flex-1
            border border-[#16A34A]
            text-[#16A34A]
            rounded-full
            py-3
            font-semibold
            active:scale-95
          "
        >
          Add to Cart
        </button>

        <button
          onClick={() => {
            handleAdd();
            router.push("/cart");
          }}
          className="
            flex-1
            bg-[#16A34A]
            text-white
            rounded-full
            py-3
            font-semibold
            active:scale-95
          "
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
