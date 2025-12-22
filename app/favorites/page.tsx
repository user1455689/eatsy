"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { foods } from "@/data/foods";
import FoodCard from "@/components/food/FoodCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favFoods = foods.filter((f) =>
    favorites.includes(f.id)
  );

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">
        Favorites
      </h1>

      {favFoods.length === 0 ? (
        <p className="text-gray-500">
          No favorites yet
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {favFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}
