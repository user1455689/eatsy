"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/splash/SplashScreen";
import HomePage from "./home/page";

export default function EntryPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2600); // match animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && <HomePage />}
    </>
  );
}
