import Link from "next/link";
import BottomNav from "@/components/layout/BottomNav";
import { foods } from "@/data/foods";

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-4 pt-4 pb-28">
      <h1 className="text-2xl font-bold">Product Listing</h1>
      <p className="text-gray-500 text-sm mt-1">Top picks near your location</p>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {foods.slice(0, 12).map((p) => (
          <Link key={p.id} href={`/products/${p.id}`} className="rounded-3xl bg-white p-3 elevated soft-press">
            <img src={p.image} alt={p.name} className="h-24 w-full rounded-2xl object-cover" />
            <div className="mt-2 flex items-start justify-between gap-1"><p className="font-semibold text-sm leading-5">{p.name}</p><span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded-full">{p.rating}★</span></div>
            <p className="text-xs text-gray-500">{p.time} delivery</p>
            <div className="mt-2 flex justify-between items-center"><p className="font-bold">Rs {p.price}</p><span className="rounded-full border border-[#ff6b4a] px-2 text-[#ff6b4a]">＋</span></div>
          </Link>
        ))}
      </div>
      <BottomNav />
    </main>
  );
}
