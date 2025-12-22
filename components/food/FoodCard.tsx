"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

/* ---------------- TYPES ---------------- */

type Food = {
  id: string;
  name: string;
  price: number;
  rating: number;
  time: string;
  image: string;
  category?: string;
};

type Props = {
  food: Food;
};

/* ---------------- COMPONENT ---------------- */

export default function FoodCard({ food }: Props) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleAddToCart = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity: 1, // ✅ quantity-only
    });
  };

  return (
    <div
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
        active:scale-[0.98]
        relative
      "
    >
      {/* ❤️ Favorite button */}
      <button
        onClick={() => toggleFavorite(food.id)}
        className="
          absolute top-2 right-2 z-10
          bg-white p-1.5 rounded-full
          shadow transition active:scale-90
        "
      >
        <Heart
          size={18}
          className={
            isFavorite(food.id)
              ? "fill-red-500 text-red-500"
              : "text-gray-400"
          }
        />
      </button>

      {/* Image → detail page */}
      <Link href={`/food/${food.id}`}>
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-32 object-cover cursor-pointer"
        />
      </Link>

      {/* Content */}
      <div className="p-3">
        <h4 className="font-semibold text-sm text-gray-900 line-clamp-1">
          {food.name}
        </h4>

        <div className="text-xs text-gray-600 flex items-center gap-2 mt-1">
          <span>⭐ {food.rating}</span>
          <span>•</span>
          <span>{food.time}</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-[#FF6A3D]">
            Rs. {food.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="
              px-3 py-1.5
              rounded-full
              bg-[#FF6A3D]
              text-white
              text-xs
              font-semibold
              transition
              active:scale-95
            "
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
