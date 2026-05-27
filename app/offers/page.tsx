export default function OffersPage(){
  return <main className="min-h-screen p-4"><h1 className="text-2xl font-bold">Offers & Promotions</h1><div className="space-y-3 mt-4">{["WELCOME50","FREESHIP","NIGHT20"].map(c=><div key={c} className="rounded-3xl p-4 bg-gradient-to-r from-orange-400 to-amber-300 text-white"><p className="text-sm opacity-90">Use coupon</p><p className="text-2xl font-bold">{c}</p><p className="text-sm mt-1">Save big on your next checkout</p></div>)}</div></main>
}
