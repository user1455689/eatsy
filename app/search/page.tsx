import Link from "next/link";
const recents = ["Chicken momo","Pizza","Cold coffee"];
const sugg = ["Burger combo","Veg thukpa","Spicy ramen","Healthy bowls"];
export default function SearchPage(){
 return <main className="min-h-screen p-4"><Link href="/home" className="text-sm">← Back</Link><h1 className="text-2xl font-bold mt-2">Search</h1><input className="w-full mt-4 rounded-2xl bg-white p-4 elevated" placeholder="Search food, stores, cuisine"/><h2 className="mt-6 font-semibold">Recent searches</h2><div className="flex gap-2 mt-2 flex-wrap">{recents.map(r=><span key={r} className="px-3 py-2 rounded-full bg-orange-100 text-sm">{r}</span>)}</div><h2 className="mt-6 font-semibold">Suggestions</h2><div className="mt-2 space-y-2">{sugg.map(s=><div key={s} className="bg-white rounded-2xl p-3 elevated">{s}</div>)}</div></main>
}
