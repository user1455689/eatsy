"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FFF7F2] p-6 text-center">
      <div className="text-6xl mb-4">🎉</div>

      <h1 className="text-2xl font-bold mb-2">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mb-6">
        Your food will be delivered soon.
        <br />
        Please keep cash ready.
      </p>

      <Link
        href="/home"
        className="bg-[#FF7A45] text-white px-6 py-3 rounded-full font-semibold"
      >
        Order More Food
      </Link>
    </div>
  );
}
