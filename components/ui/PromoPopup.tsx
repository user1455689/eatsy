"use client";

import { useEffect, useState } from "react";

const PROMO_IMAGE_URL =
  "https://i.imgur.com/SAFP3ku.png"; // 👈 paste banner image link

const PROMO_LINK = "/offers"; // optional: change to WhatsApp / food page

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("promo_seen");
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem("promo_seen", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-3 max-w-sm w-full relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-3 text-xl font-bold text-gray-600"
        >
          ×
        </button>

        {/* Promo Image */}
        <a href={PROMO_LINK}>
          <img
            src={PROMO_IMAGE_URL}
            alt="Promo banner"
            className="rounded-xl w-full"
          />
        </a>
      </div>
    </div>
  );
}
