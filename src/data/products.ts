import roseBag from "@/assets/product-rose-bag.jpg";
import wristWarmers from "@/assets/product-wrist-warmers.jpg";
import bowKey from "@/assets/product-bow-keychain.jpg";
import sunflowerKey from "@/assets/product-sunflower-keychain.jpg";
import pinkFlower from "@/assets/product-pink-flower.jpg";
import chickPlush from "@/assets/product-chick-plush.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  salePercent?: number;
};

export const products: Product[] = [
  { id: "rose-bag", name: "Crimson Rose Handbag", category: "Bags", price: 500, salePercent: 50, image: roseBag, description: "A statement rose-shaped handbag in deep crimson yarn with polished gold ring handles. Hand-crocheted petal by petal." },
  { id: "wrist-warmers", name: "Ruby Wrist Warmers", category: "Wearables", price: 45, image: wristWarmers, description: "A cosy pair of fingerless wrist warmers in rich ruby red — soft, stretchy and perfect for cool mornings." },
  { id: "bow-keychain", name: "Powder Blue Bow Keychain", category: "Charms", price: 18, image: bowKey, description: "A dainty crocheted bow charm in powder blue, finished with a sturdy silver keyring." },
  { id: "sunflower-keychain", name: "Sunflower Keychain", category: "Charms", price: 18, image: sunflowerKey, description: "A cheerful sunflower keychain in sunny yellow with a chocolate brown centre — a little burst of joy." },
  { id: "pink-flower", name: "Bloom Flower Charm", category: "Charms", price: 22, image: pinkFlower, description: "A bright pink five-petal bloom with a deep navy heart, designed to clip onto bags or keys." },
  { id: "chick-plush", name: "Bea the Chick Plush", category: "Plushies", price: 38, image: chickPlush, description: "An amigurumi chick plush with a tiny pink bow — soft, squishy and ready to be cherished." },
];