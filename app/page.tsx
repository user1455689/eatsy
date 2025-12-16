import Header from "@/components/layout/Header";
import CategoryTabs from "@/components/food/CategoryTabs";
import FoodCard from "@/components/food/FoodCard";
import BottomNav from "@/components/layout/BottomNav";
import { foods } from "@/data/foods";

export default function HomePage() {
  return (
    <div className="pb-24 px-5 pt-6">
      <Header />

      {/* Search */}
      <input
        placeholder="Search for food or restaurant"
        className="w-full mb-5 px-4 py-3 rounded-xl bg-white shadow outline-none"
      />

      {/* Promo */}
      <div className="bg-[#FF7A45] text-white rounded-2xl p-5 mb-6">
        <h3 className="text-2xl font-bold">30% OFF</h3>
        <p className="text-sm">On your first order</p>
      </div>

      {/* Categories */}
      <CategoryTabs />

      {/* Popular */}
      <h3 className="font-semibold mt-6 mb-3">Popular Food</h3>
      <div className="grid grid-cols-2 gap-4">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
