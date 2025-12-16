"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { banners } from "@/data/banners";

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href={banners[index].link}>
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6 shadow-md transition active:scale-[0.98]">
        <img
          src={banners[index].image}
          alt="Offer Banner"
          className="w-full h-full object-cover transition-opacity duration-700"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center px-5">
          <div className="text-white">
            <h3 className="text-2xl font-bold tracking-wide">
              30% OFF
            </h3>
            <p className="text-sm opacity-90">
              Limited time offer
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
