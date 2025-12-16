"use client";

import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-10 bg-[#FFF7F2]">
      
      {/* Floating Food Images (Placeholder) */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-56 h-56 rounded-full bg-white shadow-lg flex items-center justify-center text-6xl">
          🍛
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          Welcome to <span className="text-[#FF7A45]">Eatsy</span> 👋
        </h2>
        <p className="text-gray-600 text-sm">
          Unlock a world of culinary delights,
          <br /> right at your fingertips.
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={() => router.push("/home")}
        className="mt-8 w-full py-4 rounded-full bg-[#FF7A45] text-white font-semibold text-lg shadow-md active:scale-95 transition"
      >
        Get Started
      </button>
    </div>
  );
}
