"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import CategoryTabs from "@/components/food/CategoryTabs";
import FoodCard from "@/components/food/FoodCard";
import BottomNav from "@/components/layout/BottomNav";
import BannerSlider from "@/components/home/BannerSlider";
import { foods } from "@/data/foods";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");

  /* ---------------- FILTER LOGIC ---------------- */

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      food.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FFF5EE] pb-24 px-5 pt-6">
      <Header />

      {/* Search Bar */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for food"
        className="
          w-full mb-5 px-4 py-3
          rounded-xl
          bg-white
          shadow
          outline-none
          text-gray-800
          placeholder-gray-400
        "
      />

      <BannerSlider />

      {/* Category Tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

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

      <BottomNav />
    </div>
  );
}
