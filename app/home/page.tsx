"use client";
import Link from "next/link";
import { products, categories } from "@/data/commerce";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 p-4 pb-20">
      <section className="rounded-3xl bg-white/80 backdrop-blur p-6 shadow-sm">
        <p className="text-xs text-orange-600 font-semibold">DELIVER IN 10 MINS</p>
        <h1 className="text-3xl font-bold mt-2">Premium grocery at your doorstep</h1>
        <input className="w-full mt-4 rounded-2xl border p-3" placeholder="Search products, brands, meals..." />
      </section>
      <section className="mt-6">
        <h2 className="font-semibold mb-3">Categories</h2>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((c) => <span key={c} className="rounded-full bg-white px-4 py-2 text-sm shadow-sm whitespace-nowrap">{c}</span>)}
        </div>
      </section>
      <section className="mt-6">
        <div className="flex justify-between items-center"><h2 className="font-semibold">Popular picks</h2><Link href="/products" className="text-sm text-orange-600">View all</Link></div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {products.map((p) => (
            <Link href={`/products/${p.id}`} key={p.id} className="rounded-2xl bg-white p-3 shadow-sm">
              <img src={`${p.image}?w=500`} alt={p.name} className="h-24 w-full rounded-xl object-cover" />
              <p className="text-sm font-semibold mt-2">{p.name}</p>
              <p className="text-xs text-gray-500">{p.unit}</p>
              <p className="mt-1 font-bold">${p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
