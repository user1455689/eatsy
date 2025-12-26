export type FoodItem = {
  id: string;
  name: string;
  category:
    | "Momos"
    | "Noodles"
    | "Pasta"
    | "Rice"
    | "Burger"
    | "Sandwich"
    | "Pizza"
    | "Quick Bites"
    | "Veg Bites"
    | "Non-Veg Bites"
    | "Rolls";
  price: number;
  rating: number;
  time: string;
  image: string;
  description: string;
  type: "veg" | "non-veg";
};

export const foods: FoodItem[] = [
  /* ================= MOMOS ================= */

  {
    id: "m1",
    name: "Veg Momo",
    category: "Momos",
    price: 170,
    rating: 4.2,
    time: "18 min",
    image:
      "https://i.pinimg.com/736x/7d/33/a3/7d33a300db7d513ccfa9494fe291bcea.jpg",
    description:
      "Steamed vegetable dumplings served with spicy tomato chutney.",
    type: "veg",
  },
  {
    id: "m2",
    name: "Chicken Momo",
    category: "Momos",
    price: 220,
    rating: 4.4,
    time: "20 min",
    image:
      "https://i.pinimg.com/736x/a9/49/2b/a9492b09542e23ee2d96ccc98bd64e85.jpg",
    description:
      "Juicy minced chicken dumplings with Himalayan herbs.",
    type: "non-veg",
  },
  {
    id: "m3",
    name: "Cheese Momo",
    category: "Momos",
    price: 260,
    rating: 4.5,
    time: "20 min",
    image:
      "https://i.pinimg.com/736x/62/ca/5b/62ca5b4bc355b9b46a72db730748276b.jpg",
    description:
      "Rich cheese-filled dumplings, a local favorite.",
    type: "veg",
  },
  {
    id: "m4",
    name: "Chilli Momo",
    category: "Momos",
    price: 210,
    rating: 4.6,
    time: "22 min",
    image:
      "https://i.pinimg.com/1200x/97/0f/ad/970fad6833f9088cedab06751d907f97.jpg",
    description:
      "Fried momos tossed in spicy Indo-Chinese sauce.",
    type: "veg",
  },

  /* ================= NOODLES ================= */

  {
    id: "n1",
    name: "Chowmein",
    category: "Noodles",
    price: 190,
    rating: 4.2,
    time: "20 min",
    image:
      "https://i.pinimg.com/1200x/03/49/71/0349716798a4aec7506f338db1823497.jpg",
    description:
      "Classic stir-fried noodles with fresh vegetables.",
    type: "veg",
  },
  {
    id: "n2",
    name: "Chicken Chowmein",
    category: "Noodles",
    price: 240,
    rating: 4.4,
    time: "22 min",
    image:
      "https://i.pinimg.com/1200x/d0/a8/1c/d0a81cfebe822963a98c78ea385b3969.jpg",
    description:
      "Stir-fried noodles with juicy chicken pieces.",
    type: "non-veg",
  },
  {
    id: "n3",
    name: "Jhol Thukpa",
    category: "Noodles",
    price: 240,
    rating: 4.4,
    time: "22 min",
    image:
      "https://i.pinimg.com/736x/93/0b/ce/930bce04ccd794b0f8bfab12536456cb.jpg",
    description:
      "Tibetan-style noodle soup with flavorful broth.",
    type: "veg",
  },

  /* ================= PASTA ================= */

  {
    id: "p1",
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 340,
    rating: 4.3,
    time: "25 min",
    image:
      "https://i.pinimg.com/1200x/4f/10/da/4f10da5c58089b7e57ef33222272ade1.jpg",
    description:
      "Creamy white sauce pasta with cheese.",
    type: "veg",
  },
  {
    id: "p2",
    name: "Chicken White Sauce Pasta",
    category: "Pasta",
    price: 410,
    rating: 4.3,
    time: "25 min",
    image:
      "https://i.pinimg.com/1200x/37/70/ef/3770eff090c9b0ffa164cc7cd8ee43fe.jpg",
    description:
      "Creamy pasta loaded with chicken.",
    type: "non-veg",
  },

  /* ================= RICE ================= */

  {
    id: "r1",
    name: "Veg Fried Rice",
    category: "Rice",
    price: 250,
    rating: 4.1,
    time: "15 min",
    image:
      "https://i.pinimg.com/1200x/ef/9b/ba/ef9bba676ac73c9f727db77d40d07ddf.jpg",
    description:
      "Classic veg fried rice with basmati.",
    type: "veg",
  },
  {
    id: "r2",
    name: "Chicken Fried Rice",
    category: "Rice",
    price: 310,
    rating: 4.7,
    time: "25 min",
    image:
      "https://i.pinimg.com/1200x/46/97/2a/46972ab18a5cbfa51ddad6b23879025f.jpg",
    description:
      "Spicy fried rice with chicken.",
    type: "non-veg",
  },

  /* ================= PIZZA ================= */

  {
    id: "pz1",
    name: "Onion & Capsicum Pizza",
    category: "Pizza",
    price: 590,
    rating: 4.3,
    time: "25 min",
    image:
      "https://i.pinimg.com/736x/b0/96/23/b09623357dd96f64242e391b00fae7fe.jpg",
    description:
      "Classic pizza with onion and capsicum.",
    type: "veg",
  },
  {
    id: "pz2",
    name: "Chicken Chilli Pizza",
    category: "Pizza",
    price: 690,
    rating: 4.6,
    time: "28 min",
    image:
      "https://i.pinimg.com/1200x/2c/6f/45/2c6f458e1008a355f99440e397caee20.jpg",
    description:
      "Spicy chicken chilli pizza.",
    type: "non-veg",
  },
];
