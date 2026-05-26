import Link from "next/link";
import { products } from "@/data/commerce";

export default function ProductsPage() {
  return <main className="p-4"><h1 className="text-2xl font-bold mb-4">All Products</h1><div className="grid sm:grid-cols-3 gap-4">{products.map((p)=><Link key={p.id} href={`/products/${p.id}`} className="rounded-2xl border p-4"><p className="font-semibold">{p.name}</p><p className="text-sm text-gray-500">{p.category}</p><p>${p.price}</p></Link>)}</div></main>;
}
