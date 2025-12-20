export type MenuItem = {
  id: string;
  name: string;
  category:
    | "Momos"
    | "Noodles"
    | "Burger"
    | "Sandwich"
    | "Pizza"
    | "Veg Bites"
    | "Non-Veg Bites"
    | "Egg Roll"
    | "Rice"
    | "Pasta";
  vegPrice?: number;
  chickenPrice?: number;
  image: string; // 🔹 image link placeholder
};

export const menu: MenuItem[] = [
  /* ---------------- MOMOS ---------------- */
  {
    id: "veg-momo",
    name: "Veg Momo",
    category: "Momos",
    vegPrice: 150,
    image: "/images/placeholder.jpg",
  },
  {
    id: "chicken-momo",
    name: "Chicken Momo",
    category: "Momos",
    chickenPrice: 210,
    image: "/images/placeholder.jpg",
  },
  {
    id: "cheese-momo",
    name: "Cheese Momo",
    category: "Momos",
    vegPrice: 240,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- NOODLES ---------------- */
  {
    id: "chowmein",
    name: "Chowmein",
    category: "Noodles",
    vegPrice: 190,
    chickenPrice: 240,
    image: "/images/placeholder.jpg",
  },
  {
    id: "hakka-noodles",
    name: "Hakka Noodles",
    category: "Noodles",
    vegPrice: 240,
    chickenPrice: 280,
    image: "/images/placeholder.jpg",
  },
  {
    id: "schezwan-noodles",
    name: "Schezwan Noodles",
    category: "Noodles",
    vegPrice: 260,
    chickenPrice: 290,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- BURGER ---------------- */
  {
    id: "veg-burger",
    name: "Veg Burger",
    category: "Burger",
    vegPrice: 180,
    image: "/images/placeholder.jpg",
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "Burger",
    chickenPrice: 220,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- SANDWICH ---------------- */
  {
    id: "grilled-veg-sandwich",
    name: "Grilled Veg Sandwich",
    category: "Sandwich",
    vegPrice: 180,
    image: "/images/placeholder.jpg",
  },
  {
    id: "grilled-chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    category: "Sandwich",
    chickenPrice: 240,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- PIZZA ---------------- */
  {
    id: "veg-pizza",
    name: "Veg Pizza (Regular)",
    category: "Pizza",
    vegPrice: 390,
    image: "/images/placeholder.jpg",
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza (Regular)",
    category: "Pizza",
    chickenPrice: 490,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- VEG BITES ---------------- */
  {
    id: "aloo-paratha",
    name: "Aloo Paratha",
    category: "Veg Bites",
    vegPrice: 190,
    image: "/images/placeholder.jpg",
  },
  {
    id: "paneer-pakoda",
    name: "Paneer Pakoda",
    category: "Veg Bites",
    vegPrice: 430,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- NON-VEG BITES ---------------- */
  {
    id: "chicken-chilli",
    name: "Chicken Chilli",
    category: "Non-Veg Bites",
    chickenPrice: 390,
    image: "/images/placeholder.jpg",
  },
  {
    id: "chicken-nuggets",
    name: "Chicken Nuggets",
    category: "Non-Veg Bites",
    chickenPrice: 490,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- EGG ROLL ---------------- */
  {
    id: "egg-roll",
    name: "Egg Roll",
    category: "Egg Roll",
    vegPrice: 290,
    image: "/images/placeholder.jpg",
  },
  {
    id: "chicken-roll",
    name: "Chicken Roll",
    category: "Egg Roll",
    chickenPrice: 340,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- RICE ---------------- */
  {
    id: "fried-rice",
    name: "Fried Rice",
    category: "Rice",
    vegPrice: 190,
    chickenPrice: 290,
    image: "/images/placeholder.jpg",
  },
  {
    id: "schezwan-rice",
    name: "Schezwan Rice",
    category: "Rice",
    vegPrice: 210,
    chickenPrice: 320,
    image: "/images/placeholder.jpg",
  },

  /* ---------------- PASTA ---------------- */
  {
    id: "white-sauce-pasta",
    name: "White Sauce Pasta",
    category: "Pasta",
    vegPrice: 340,
    chickenPrice: 390,
    image: "/images/placeholder.jpg",
  },
  {
    id: "red-sauce-pasta",
    name: "Red Sauce Pasta",
    category: "Pasta",
    vegPrice: 390,
    chickenPrice: 440,
    image: "/images/placeholder.jpg",
  },
];
