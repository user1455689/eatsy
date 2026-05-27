"use client";
import Link from "next/link";

import BottomNav from "@/components/layout/BottomNav";
import { foods } from "@/data/foods";

const cats = ["Pizza","Burger","Noodles","Momos","Sandwich","Rice"];

export default function HomePage() {
  const trending = foods.slice(0, 4);
  const recommended = foods.slice(4, 8);

  return (
    <main className="min-h-screen pb-28 px-4 pt-4">
      <section className="rounded-[28px] bg-[#ff6b4a] text-white p-4 elevated float-in">
        <p className="text-xs opacity-90">Delivery Location</p>
        <div className="flex items-center justify-between mt-1">
          <h1 className="font-semibold text-lg truncate">2464 Royal Ln. Mesa, New Jersey</h1>
          <div className="size-10 rounded-full bg-white/20" />
        </div>
        <Link href="/search" className="block mt-4 rounded-2xl bg-white text-gray-500 px-4 py-3">🔍 Search dishes, stores, groceries</Link>
      </section>

      <section className="mt-4 rounded-3xl p-4 bg-[linear-gradient(130deg,#ffcd55,#ffad33)] text-white elevated">
        <p className="text-sm opacity-80">Limited Offer</p>
        <h2 className="text-3xl leading-tight font-bold mt-1">50% OFF<br/>on first order</h2>
        <Link href="/offers" className="inline-block mt-4 bg-white text-[#ff6b4a] px-5 py-2 rounded-full font-semibold soft-press">Order now</Link>
      </section>

      <section className="mt-6">
        <div className="flex justify-between"><h3 className="text-xl font-semibold">All Categories</h3><Link href="/categories" className="text-[#ff6b4a]">See all</Link></div>
        <div className="flex gap-3 overflow-x-auto mt-3 pb-1">
          {cats.map((c, i) => <Link key={c} href="/categories" className="min-w-20 text-center"><div className="size-16 mx-auto rounded-full bg-orange-100 grid place-items-center text-2xl">{["🍕","🍔","🍜","🥟","🥪","🍚"][i]}</div><p className="text-xs mt-2">{c}</p></Link>)}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex justify-between"><h3 className="text-xl font-semibold">Trending Restaurants</h3><Link href="/products" className="text-[#ff6b4a]">See all</Link></div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {trending.map((f) => <Link key={f.id} href={`/products/${f.id}`} className="rounded-3xl glass-card p-2"><img src={f.image} alt={f.name} className="h-26 w-full object-cover rounded-2xl"/><p className="font-semibold mt-2 text-sm">{f.name}</p><p className="text-xs text-gray-500">⭐ {f.rating} • {f.time}</p></Link>)}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex justify-between"><h3 className="text-xl font-semibold">Flash Sale</h3><span className="text-[#ff6b4a] text-sm">Ends in 02:14:22</span></div>
        <div className="mt-3 space-y-3">
          {recommended.map((f) => <Link key={f.id} href={`/products/${f.id}`} className="flex items-center gap-3 rounded-2xl bg-white p-3 elevated"><img src={f.image} alt={f.name} className="size-16 rounded-xl object-cover"/><div className="flex-1"><p className="font-medium">{f.name}</p><p className="text-xs text-gray-500">{f.category}</p></div><div><p className="font-bold text-[#ff6b4a]">Rs {f.price}</p><p className="text-xs text-emerald-600">20% OFF</p></div></Link>)}
        </div>
      </section>

      <BottomNav />
=======
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
