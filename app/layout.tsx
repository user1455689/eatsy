import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { ProfileProvider } from "@/context/ProfileContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFF5EE] min-h-screen text-gray-800 antialiased">
        {/* 🧠 Profile → global user info */}
        <ProfileProvider>
          {/* ❤️ Favorites → food likes */}
          <FavoritesProvider>
            {/* 🛒 Cart → order items */}
            <CartProvider>
              {children}
            </CartProvider>
          </FavoritesProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
