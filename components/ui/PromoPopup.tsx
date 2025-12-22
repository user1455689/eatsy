"use client";

import { useEffect, useState } from "react";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // show popup only once per session
    const seen = sessionStorage.getItem("promo_seen");
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem("promo_seen", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-4 max-w-sm w-full relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </button>

        <img
          src="/promo/banner.jpg"
          alt="Promo"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
