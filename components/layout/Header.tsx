"use client";

import { useProfile } from "@/context/ProfileContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { profile } = useProfile();

  const [location, setLocation] = useState(
    "Detecting location..."
  );
  const [greeting, setGreeting] = useState(
    "Hello"
  );

  /* ---------------- TIME-BASED GREETING ---------------- */
  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon 🌤️");
    } else if (hour >= 17 && hour < 22) {
      setGreeting("Good Evening 🌆");
    } else {
      setGreeting("Good Night 🌙");
    }
  }, []);

  /* ---------------- LOCATION DETECTION ---------------- */
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Your location");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } =
          position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            "Your area";

          setLocation(city);
        } catch {
          setLocation("Your area");
        }
      },
      () => {
        setLocation("Kathmandu");
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-between mb-5">
      {/* LEFT: Greeting + Location */}
      <div>
        {/* 👋 Greeting */}
        <p className="text-sm text-gray-600">
          {greeting},{" "}
          <span className="font-medium">
            {profile?.name || "Guest"}
          </span>
        </p>

        {/* 📍 Location */}
        <div className="flex items-center gap-1 text-sm text-gray-800 font-semibold">
          📍 {location}
        </div>
      </div>

      {/* RIGHT: Logo / Avatar */}
      <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
        🍽️
      </div>
    </div>
  );
}
