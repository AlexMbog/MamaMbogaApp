export interface LocationType {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export const Locations: LocationType[] = [
  { id: 1, name: "Nairobi", latitude: -1.2921, longitude: 36.8219 },
  { id: 2, name: "Mombasa", latitude: -4.0435, longitude: 39.6682 },
  { id: 3, name: "Kisumu", latitude: -0.0917, longitude: 34.767 },
];
export const ImageSliderOffers = [
  {
    id: 1,
    header: "Up to 20% Offer sale",
    subheader: "Enjoy your shopping with our black Friday",
    buttonText: "Shop Now",
    image: require("@/assets/images/slider-1.png"),
  },
  {
    id: 2,
    header: "Vegetables Sale",
    subheader: "Buy 1 Get 1 Free",
    buttonText: "Shop Now",
    image: require("@/assets/images/slider-2.png"),
  },
  {
    id: 3,
    header: "Dairy Products",
    subheader: "Up to 15% off",
    buttonText: "Shop Now",
    image: require("@/assets/images/slider-3.png"),
  },
];
export const Categories = [
  {
    id: 1,
    title: "Vegetable",
    image: require("@/assets/images/cabbage.png"),
  },
  {
    id: 2,
    title: "Fruits",
    image: require("@/assets/images/vegetable.png"),
  },
  {
    id: 3,
    title: "Dairy",
    image: require("@/assets/images/drink.png"),
  },
  {
    id: 5,
    title: "Juice",
    image: require("@/assets/images/ice-cream.png"),
  },
  {
    id: 6,
    title: "Spices",
    image: require("@/assets/images/ice-cream.png"),
  },
];
export const FlashSale = [
  {
    id: 1,
    title: "Pineapple",
    image: require("@/assets/images/Offer-1.jpeg"),
    price: 4.99,
    discount: 2.99,
  },
  {
    id: 2,
    title: "Fresh Bananas",
    image: require("@/assets/images/Offer-2.jpeg"),
    price: 3.99,
    discount: 1.99,
  },
  {
    id: 3,
    title: "Fresh Fish",
    image: require("@/assets/images/Offer-3.jpeg"),
    price: 2.99,
    discount: 1.49,
  },
  {
    id: 4,
    title: "Spinach",
    image: require("@/assets/images/Offer-6.jpeg"),
    price: 3.49,
    discount: 1.99,
  },
];
export const Products = [
  {
    id: 1,
    title: "Red Apples",
    image: require("@/assets/images/Product-1.jpeg"),
    price: 5.99,
    discount: 3.99,
  },
  {
    id: 2,
    title: "Broccoli",
    image: require("@/assets/images/Product-2.jpeg"),
    price: 4.49,
    discount: 2.49,
  },
  {
    id: 3,
    title: "Carrots",
    image: require("@/assets/images/Product-3.jpeg"),
    price: 3.99,
    discount: 2.49,
  },
  {
    id: 4,
    title: "Strawberries",
    image: require("@/assets/images/Product-4.jpeg"),
    price: 6.99,
    discount: 4.99,
  },
  {
    id: 5,
    title: "Almondss",
    image: require("@/assets/images/Product-5.jpeg"),
    price: 9.99,
    discount: 7.99,
  },
  {
    id: 6,
    title: "Chicken Breast",
    image: require("@/assets/images/Product-6.jpeg"),
    price: 8.99,
    discount: 6.99,
  },
];
export const AllProductsCategory = [
  {
    id: 1,
    name: "Fresh Vegatables",
    image: require("@/assets/images/slider-1.png"),
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Fresh Fruits",
    image: require("@/assets/images/Fruits.jpeg"),
    category: "Fruits",
  },
  {
    id: 3,
    name: "Dairy & Eggs",
    image: require("@/assets/images/Eggs.jpeg"),
    category: "Dairy",
  },
  {
    id: 4,
    name: "Gas Cylinders Refill",
    image: require("@/assets/images/Gas.jpeg"),
    category: "Household",
  },
  {
    id: 5,
    name: "Meat & Fish",
    image: require("@/assets/images/Meat.jpeg"),
    category: "meat",
  },
  {
    id: 6,
    name: "Cooking Oil & Ghee",
    image: require("@/assets/images/Cooking.jpeg"),
    category: "Oil",
  },
  {
    id: 7,
    name: "Vegatables",
    image: require("@/assets/images/cabbage.png"),
    category: "Vegetables",
  },
  {
    id: 8,
    name: "Vegatables",
    image: require("@/assets/images/cabbage.png"),
    category: "Vegetables",
  },
];
export const COLORS = [
  "#D1F2C2",
  "#FFE4C4",
  "#FFD9DA",
  "#E0EAFF",
  "#FFF4CC",
  "#E4F3FF",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];
export const ProductList = [
  {
    id: 1,
    name: "Broccoli",
    image: require("@/assets/images/slider-1.png"),
    price: "120",
    category: "Vegetables",
    calories: "55",
    protein: "3.7g",
    rating: "4.2",
    description:
      "Fresh vegetables are packed with nutrients, flavor, and vibrant color, making them a healthy choice for any meal.",
  },
  {
    id: 2,
    name: "Bananas",
    image: require("@/assets/images/Fruits.jpeg"),
    price: "80",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Eggs",
    image: require("@/assets/images/Eggs.jpeg"),
    price: "200",
    category: "Dairy",
  },
  {
    id: 4,
    name: "Gas Cylinder",
    image: require("@/assets/images/Gas.jpeg"),
    price: "1500",
    category: "Household",
  },
  {
    id: 5,
    name: "Chicken",
    image: require("@/assets/images/Meat.jpeg"),
    price: "500",
    category: "Meat",
  },
  {
    id: 6,
    name: "Cooking Oil",
    image: require("@/assets/images/Cooking.jpeg"),
    price: "300",
    category: "Oil",
  },
  {
    id: 7,
    name: "Avocados",
    image: require("@/assets/images/Product-1.jpeg"),
    price: "250",
    category: "Fruits",
  },
  {
    id: 8,
    name: "Spinach",
    image: require("@/assets/images/Offer-6.jpeg"),
    price: "100",
    category: "Vegetables",
  },
];
