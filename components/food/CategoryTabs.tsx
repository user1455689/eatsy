"use client";

import { categories } from "@/data/categories";

type Props = {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryTabs({
  activeCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.name;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.name)}
            className={`
              flex items-center gap-2
              px-4 py-2
              rounded-full
              whitespace-nowrap
              text-sm
              font-medium
              transition
              active:scale-95
              ${
                isActive
                  ? "bg-[#FF6A3D] text-white shadow"
                  : "bg-white text-gray-700 border"
              }
            `}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
