import Link from "next/link";
import { foods } from "@/data/foods";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = foods.find((f) => f.id === id);
  if (!p) return <main className="p-4">Not found.</main>;
  return (
    <main className="min-h-screen pb-24">
      <img src={p.image} alt={p.name} className="h-72 w-full object-cover" />
      <section className="-mt-8 rounded-t-[32px] bg-[#fff8f2] p-5 space-y-3">
        <div className="flex items-center justify-between"><h1 className="text-3xl font-bold">{p.name}</h1><span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">⭐ {p.rating}</span></div>
        <p className="text-gray-600">{p.description}</p>
        <div className="glass-card rounded-2xl p-4"><p className="font-semibold">Nutrition & details</p><p className="text-sm text-gray-500 mt-1">Approx 380 kcal • Protein 14g • Serves 1-2</p></div>
        <div className="flex items-center justify-between"><p className="text-gray-600">Delivery ETA</p><p className="font-semibold">{p.time}</p></div>
        <Link href="/cart" className="block text-center mt-3 rounded-full bg-[#ff6b4a] text-white py-4 font-semibold soft-press">Add to cart • Rs {p.price}</Link>
      </section>
    </main>
  );
}
