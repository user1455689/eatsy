import { categories } from "@/data/categories";

export default function CategoryTabs() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="
            flex items-center gap-2
            px-4 py-2
            bg-white
            rounded-full
            shadow
            text-sm
            text-gray-700
            whitespace-nowrap
            transition
            active:scale-95
          "
        >
          <span>{cat.icon}</span>
          <span className="font-medium">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
