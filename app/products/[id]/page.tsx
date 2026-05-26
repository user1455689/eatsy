import { products } from "@/data/commerce";

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = products.find((x) => x.id === id);
  if (!p) return <main className="p-4">Product not found.</main>;
  return <main className="p-4 space-y-4"><img src={`${p.image}?w=1000`} alt={p.name} className="h-64 w-full object-cover rounded-3xl"/><h1 className="text-3xl font-bold">{p.name}</h1><p>{p.description}</p><p className="font-semibold">Delivery in 12-20 mins</p><button className="w-full py-3 rounded-2xl bg-black text-white">Add to cart</button></main>;
}
