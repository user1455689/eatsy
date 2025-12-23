"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/* ---------------- TYPES ---------------- */

export type Profile = {
  name: string;
  phone: string;
  address: string;
  landmark: string;
  foodPreference: "All" | "Veg" | "Non-Veg";
};

type ProfileContextType = {
  profile: Profile | null;
  updateProfile: (data: Profile) => void;
  clearProfile: () => void;
};

/* ---------------- CONTEXT ---------------- */

const ProfileContext =
  createContext<ProfileContextType | null>(null);

/* ---------------- PROVIDER ---------------- */

export function ProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profile, setProfile] =
    useState<Profile | null>(null);

  /* LOAD FROM localStorage */
  useEffect(() => {
    const saved =
      localStorage.getItem("user-profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  /* UPDATE + SAVE */
  const updateProfile = (data: Profile) => {
    setProfile(data);
    localStorage.setItem(
      "user-profile",
      JSON.stringify(data)
    );
  };

  /* CLEAR PROFILE */
  const clearProfile = () => {
    setProfile(null);
    localStorage.removeItem("user-profile");
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        clearProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    throw new Error(
      "useProfile must be used inside ProfileProvider"
    );
  }
  return ctx;
}
