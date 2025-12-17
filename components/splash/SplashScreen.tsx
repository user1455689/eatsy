"use client";

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        {/* Logo */}
        <div className="w-20 h-20 rounded-2xl bg-[#FF6A3D] text-white flex items-center justify-center text-3xl font-bold shadow-lg">
          E
        </div>

        {/* Brand */}
        <h1 className="mt-4 text-2xl font-bold text-white">
          Eatsy
        </h1>
        <p className="text-white/90 text-sm mt-1">
          Fresh food, fast delivery
        </p>
      </div>
    </div>
  );
}
