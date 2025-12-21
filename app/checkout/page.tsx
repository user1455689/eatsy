"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { STORE_LOCATION } from "@/data/storeLocation";
import {
  calculateDistance,
  calculateDeliveryFee,
} from "@/utils/delivery";

const WHATSAPP_NUMBER = "9779746571404"; // ✅ your number

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");

  const [distance, setDistance] = useState<number | null>(null);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [serviceBlocked, setServiceBlocked] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(true);

  const subtotal = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  /* ---------------- REDIRECT IF CART EMPTY ---------------- */
  useEffect(() => {
    if (cart.length === 0) router.push("/home");
  }, [cart, router]);

  /* ---------------- AUTO DETECT LOCATION ---------------- */
  useEffect(() => {
    if (!navigator.geolocation) {
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        const d = calculateDistance(
          STORE_LOCATION.lat,
          STORE_LOCATION.lng,
          latitude,
          longitude
        );

        setDistance(d);

        if (d > 3) {
          setServiceBlocked(true);
        } else {
          setDeliveryFee(calculateDeliveryFee(d));
        }

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setAddress(data.display_name || "");
        } catch {}

        setLoadingLocation(false);
      },
      () => setLoadingLocation(false)
    );
  }, []);

  /* ---------------- VALIDATIONS ---------------- */
  const isValidPhone = (p: string) =>
    /^[0-9]{10}$/.test(p);

  /* ---------------- SEND TO WHATSAPP ---------------- */
  const sendOrderToWhatsApp = (
    orderId: number,
    fullPhone: string
  ) => {
    const itemsText = cart
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name} (${i.size}) x${
            i.quantity
          } — Rs. ${i.price * i.quantity}`
      )
      .join("\n");

    const message = `
🛎️ *NEW FOOD ORDER*

🆔 Order ID: ${orderId}

👤 Name: ${name}
📞 Phone: ${fullPhone}

📍 Address:
${address}

🧭 Landmark:
${landmark || "N/A"}

🍽️ Items:
${itemsText}

📏 Distance: ${distance?.toFixed(2)} km
🚚 Delivery Fee: Rs. ${deliveryFee}

💰 Subtotal: Rs. ${subtotal}
💵 TOTAL: Rs. ${subtotal + deliveryFee}

💳 Payment: Cash on Delivery
🕒 Time: ${new Date().toLocaleString()}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  /* ---------------- PLACE ORDER ---------------- */
  const placeOrder = async () => {
    if (!name || !phone || !address) {
      alert("Please fill all required details");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Enter valid 10-digit Nepal phone number");
      return;
    }

    if (serviceBlocked) {
      alert(
        "Sorry, delivery is available only within 3 km."
      );
      return;
    }

    const orderId = Date.now();
    const fullPhone = `+977${phone}`;

    /* OPTIONAL: Send to Google Sheets (Make) */
    await fetch(
      "https://hook.eu1.make.com/js24ep6zbexlcs2g7tifuigvy7v7n1dt",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          name,
          phone: fullPhone,
          address,
          landmark,
          items: cart.map(
            (i) =>
              `${i.name} (${i.size}) x${i.quantity}`
          ),
          subtotal,
          distance: distance?.toFixed(2) + " km",
          deliveryFee,
          total: subtotal + deliveryFee,
          payment: "COD",
          time: new Date().toLocaleString(),
        }),
      }
    );

    /* SEND TO WHATSAPP */
    sendOrderToWhatsApp(orderId, fullPhone);

    clearCart();
    router.push("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] p-5 pb-28 text-black">
      <h1 className="text-2xl font-bold mb-4">
        Checkout
      </h1>

      <div className="bg-white rounded-2xl p-4 mb-4 shadow">
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-3 rounded-xl border text-black bg-white"
        />

        <div className="flex mb-3">
          <span className="px-4 py-3 bg-gray-100 border rounded-l-xl">
            +977
          </span>
          <input
            placeholder="98XXXXXXXX"
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
            className="w-full px-4 py-3 border rounded-r-xl text-black bg-white"
          />
        </div>

        <textarea
          placeholder={
            loadingLocation
              ? "Detecting your location..."
              : "Delivery Address"
          }
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
          className="w-full mb-3 px-4 py-3 rounded-xl border text-black bg-white"
        />

        <input
          placeholder="Landmark (optional)"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border text-black bg-white"
        />
      </div>

      {serviceBlocked && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-4 font-semibold text-sm">
          🚫 Delivery available only within 3 km from Indo-Bhutan Cafe.
        </div>
      )}

      <div className="bg-white rounded-2xl p-4 mb-20 shadow">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Delivery Fee</span>
          <span>Rs. {deliveryFee}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>Rs. {subtotal + deliveryFee}</span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
        <button
          onClick={placeOrder}
          disabled={serviceBlocked}
          className={`w-full py-3 rounded-full font-semibold ${
            serviceBlocked
              ? "bg-gray-300 text-gray-600"
              : "bg-[#FF6A3D] text-white"
          }`}
        >
          Place Order (COD)
        </button>
      </div>
    </div>
  );
}
