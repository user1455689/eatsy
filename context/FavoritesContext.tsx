"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/* ---------------- TYPES ---------------- */

type FavoritesContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

/* ---------------- CONTEXT ---------------- */

const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

const STORAGE_KEY = "favorite_foods";

/* ---------------- PROVIDER ---------------- */

export function FavoritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorites, setFavorites] = useState<string[]>([]);

  /* 🔄 Load from localStorage on first mount */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  /* 💾 Save to localStorage whenever favorites change */
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }, [favorites]);

  /* ❤️ Toggle favorite */
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  const isFavorite = (id: string) =>
    favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error(
      "useFavorites must be used inside FavoritesProvider"
    );
  }
  return ctx;
}
