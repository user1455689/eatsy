"use client";

import { useProfile } from "@/context/ProfileContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { profile, updateProfile, clearProfile } =
    useProfile();
  const router = useRouter();

  const [form, setForm] = useState({
    name: profile?.name || "",
    phone: profile?.phone || "",
    address: profile?.address || "",
    landmark: profile?.landmark || "",
    foodPreference:
      profile?.foodPreference || "All",
  });

  const saveProfile = () => {
    if (!form.name || !form.phone) {
      alert("Name and phone are required");
      return;
    }

    updateProfile(form);

    // ✅ Redirect to home after save
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] p-5 pb-24 text-black">
      <h1 className="text-2xl font-bold mb-4">
        Profile
      </h1>

      <div className="bg-white rounded-2xl p-4 shadow mb-4">
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full mb-3 px-4 py-3 border rounded-xl"
        />

        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
          className="w-full mb-3 px-4 py-3 border rounded-xl"
        />

        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            setForm({
              ...form,
              address: e.target.value,
            })
          }
          rows={3}
          className="w-full mb-3 px-4 py-3 border rounded-xl"
        />

        <input
          placeholder="Landmark"
          value={form.landmark}
          onChange={(e) =>
            setForm({
              ...form,
              landmark: e.target.value,
            })
          }
          className="w-full mb-3 px-4 py-3 border rounded-xl"
        />

        {/* Preference */}
        <div className="flex gap-2 mb-3">
          {["All", "Veg", "Non-Veg"].map(
            (p) => (
              <button
                key={p}
                onClick={() =>
                  setForm({
                    ...form,
                    foodPreference:
                      p as any,
                  })
                }
                className={`flex-1 py-2 rounded-full text-sm font-semibold ${
                  form.foodPreference === p
                    ? "bg-[#FF6A3D] text-white"
                    : "bg-gray-100"
                }`}
              >
                {p}
              </button>
            )
          )}
        </div>

        <button
          onClick={saveProfile}
          className="w-full bg-[#FF6A3D] text-white py-3 rounded-full font-semibold"
        >
          Save Profile
        </button>
      </div>

      {/* Reset */}
      {profile && (
        <button
          onClick={() => {
            clearProfile();
            router.push("/home");
          }}
          className="w-full text-red-600 font-semibold"
        >
          Reset Profile
        </button>
      )}
    </div>
  );
}
