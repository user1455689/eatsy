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
      quantity: 1,
    });
  };

  return (
    <div
      className="
        group relative
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        active:scale-[0.98]
      "
    >
      {/* ❤️ Favorite Button */}
      <button
        onClick={() => toggleFavorite(food.id)}
        className="
          absolute top-3 right-3 z-10
          bg-white/90 backdrop-blur
          p-2 rounded-full
          shadow-sm
          transition
          hover:scale-110
          active:scale-95
        "
        aria-label="Add to favorites"
      >
        <Heart
          size={18}
          className={
            isFavorite(food.id)
              ? "fill-red-500 text-red-500"
              : "text-gray-400 group-hover:text-red-400"
          }
        />
      </button>

      {/* Image */}
      <Link href={`/food/${food.id}`}>
        <div className="relative">
          <img
            src={food.image}
            alt={food.name}
            className="
              w-full h-36
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h4 className="font-semibold text-sm text-gray-900 line-clamp-1">
          {food.name}
        </h4>

        {/* Meta */}
        <div className="text-xs text-gray-600 flex items-center gap-2 mt-1">
          <span>⭐ {food.rating}</span>
          <span className="opacity-40">•</span>
          <span>{food.time}</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4">
          <p className="font-bold text-sm bg-gradient-to-r from-[#16A34A] to-[#4ADE80] bg-clip-text text-transparent">
            Rs. {food.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="
              px-4 py-1.5
              rounded-full
              bg-[#16A34A]
              text-white
              text-xs
              font-semibold
              shadow-sm
              transition
              hover:bg-[#15803D]
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
