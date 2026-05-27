import Link from "next/link";
import { foods } from "@/data/foods";
export default async function RestaurantPage(){
 const list=foods.slice(0,5);
 return <main className="p-4 pb-20"><h1 className="text-3xl font-bold">Eleven Madison Park</h1><p className="text-gray-500">25-30 min • 1.3 km</p><div className="mt-4 space-y-3">{list.map(i=><Link key={i.id} href={`/products/${i.id}`} className="bg-white rounded-3xl p-3 flex gap-3 elevated"><img src={i.image} alt={i.name} className="size-20 rounded-2xl object-cover"/><div className="flex-1"><p className="font-semibold">{i.name}</p><p className="text-sm text-gray-500">{i.description.slice(0,48)}...</p><div className="mt-1 flex justify-between"><p className="font-bold">Rs {i.price}</p><span className="border px-3 rounded-full text-[#ff6b4a]">Add</span></div></div></Link>)}</div></main>
}
