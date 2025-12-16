"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

type Props = {
  food: {
    id: string;
    name: string;
    price: number;
    rating: number;
    time: string;
    image: string;
  };
};

export default function FoodCard({ food }: Props) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Image → go to detail page */}
      <Link href={`/food/${food.id}`}>
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-32 object-cover cursor-pointer"
        />
      </Link>

      <div className="p-3">
        <h4 className="font-semibold text-sm text-gray-900">
          {food.name}
        </h4>

        <div className="text-xs text-gray-600 flex gap-2 mt-1">
          ⭐ {food.rating} • {food.time}
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-[#FF6A3D]">
            Rs. {food.price}
          </p>

          {/* Add to cart */}
          <button
            onClick={() =>
              addToCart({
                id: food.id,
                name: food.name,
                price: food.price,
                image: food.image,
                quantity: 1,
                size: "Half",
              })
            }
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
