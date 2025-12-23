"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import CategoryTabs from "@/components/food/CategoryTabs";
import FoodCard from "@/components/food/FoodCard";
import BottomNav from "@/components/layout/BottomNav";
import BannerSlider from "@/components/home/BannerSlider";
import PromoPopup from "@/components/ui/PromoPopup";

import { foods } from "@/data/foods";

/* ---------------- HELPERS ---------------- */

const isVeg = (name: string) => {
  const vegKeywords = [
    "veg",
    "paneer",
    "cheese",
    "mushroom",
    "corn",
  ];
  return vegKeywords.some((k) =>
    name.toLowerCase().includes(k)
  );
};

const isNonVeg = (name: string) => {
  const nonVegKeywords = [
    "chicken",
    "mutton",
    "buff",
    "egg",
    "fish",
  ];
  return nonVegKeywords.some((k) =>
    name.toLowerCase().includes(k)
  );
};

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [foodType, setFoodType] =
    useState<"All" | "Veg" | "Non-Veg">(
      "All"
    );

  /* ---------------- FILTER LOGIC ---------------- */

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      food.category === activeCategory;

    const matchesType =
      foodType === "All" ||
      (foodType === "Veg" &&
        isVeg(food.name)) ||
      (foodType === "Non-Veg" &&
        isNonVeg(food.name));

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType
    );
  });

  return (
    <div className="min-h-screen bg-[#FFF5EE] pb-24 px-5 pt-6 text-black">
      {/* Promo Popup */}
      <PromoPopup />

      {/* Header */}
      <Header />

      {/* Search */}
      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search for food"
        className="
          w-full mb-4 px-4 py-3
          rounded-xl bg-white
          shadow outline-none
          text-black placeholder-gray-400
        "
      />

      {/* 🥦 Veg / 🍗 Non-Veg Toggle */}
      <div className="flex gap-3 mb-4">
        {["All", "Veg", "Non-Veg"].map(
          (type) => (
            <button
              key={type}
              onClick={() =>
                setFoodType(
                  type as "All" | "Veg" | "Non-Veg"
                )
              }
              className={`
                flex-1 py-2 rounded-full
                text-sm font-semibold
                transition active:scale-95
                ${
                  foodType === type
                    ? type === "Veg"
                      ? "bg-green-600 text-white"
                      : type === "Non-Veg"
                      ? "bg-red-600 text-white"
                      : "bg-gray-900 text-white"
                    : "bg-white text-gray-700 shadow"
                }
              `}
            >
              {type === "Veg" && "🥦 "}
              {type === "Non-Veg" && "🍗 "}
              {type}
            </button>
          )
        )}
      </div>

      {/* Banners */}
      <BannerSlider />

      {/* Categories */}
      <CategoryTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Section title */}
      <h3 className="font-semibold mt-6 mb-3 text-gray-900">
        Popular Food
      </h3>

      {/* Food Grid */}
      {filteredFoods.length === 0 ? (
        <p className="text-gray-600 text-sm">
          No food found
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
