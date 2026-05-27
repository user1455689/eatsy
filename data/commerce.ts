export type CommerceProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  discount?: number;
  rating: number;
  stock: number;
  unit: string;
  image: string;
  description: string;
};

export const categories = [
  "Grocery","Fruits & Vegetables","Dairy","Bakery","Beverages","Snacks","Fast Food","Meat","Frozen Foods","Household",
];

export const products: CommerceProduct[] = [
  { id: "p1", name: "Organic Bananas", category: "Fruits & Vegetables", price: 3.99, discount: 15, rating: 4.8, stock: 60, unit: "6 pcs", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e37f", description: "Fresh organic bananas sourced daily." },
  { id: "p2", name: "Artisan Sourdough", category: "Bakery", price: 4.5, discount: 10, rating: 4.7, stock: 22, unit: "1 loaf", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff", description: "Stone baked sourdough with crunchy crust." },
  { id: "p3", name: "Cold Brew Coffee", category: "Beverages", price: 2.99, rating: 4.6, stock: 120, unit: "250 ml", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", description: "Smooth nitro-style cold brew." }
];
