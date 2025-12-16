import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFF5EE] min-h-screen text-gray-800 antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
