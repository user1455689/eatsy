"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Your area";

          setLocation(city);
        } catch {
          setLocation("Your location");
        }
      },
      () => {
        setLocation("Kathmandu, Nepal");
      }
    );
  }, []);

  return (
    <div className="mb-5">
      {/* Top row: Logo + Profile */}
      <div className="flex items-center justify-between mb-2">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-10 h-10 rounded-xl bg-[#FF6A3D] text-white flex items-center justify-center font-bold text-lg shadow">
            E
          </div>

          {/* Restaurant Name */}
          <div>
            <h2 className="font-bold text-gray-900 leading-tight">
              Eatsy
            </h2>
            <p className="text-xs text-gray-500">
              Food Delivery
            </p>
          </div>
        </div>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
          👤
        </div>
      </div>

      {/* Location */}
      <div>
        <p className="text-xs text-gray-500">Deliver to</p>
        <h3 className="font-semibold text-gray-900">
          {location}
        </h3>
      </div>
    </div>
  );
}
