import { CategoryType, slideDataType } from "../interfaces";

export const categories: CategoryType[] = [
  {
    cat: "Electronics",
    imgUrl: "electronic.jpg",
    items: "smartphones, laptops",
  },
  {
    cat: "Fragrances",
    imgUrl: "fragerance.png",
    items: "fragrances",
  },
  {
    cat: "Bags",
    imgUrl: "bag.jpg",
    items: "womens-bags",
  },
  {
    cat: "Glasses",
    imgUrl: "glass.jpg",
    items: "sunglasses",
  },
  {
    cat: "Grocerries",
    imgUrl: "grocery.jpg",
    items: "groceries",
  },
  {
    cat: "Home Decors",
    imgUrl: "home-decor.jpg",
    items: "home-decoration, furniture",
  },
  {
    cat: "Jewelleries",
    imgUrl: "jewellery.jpg",
    items: "womens-jewellery",
  },
  {
    cat: "Clothings",
    imgUrl: "clothing.jpg",
    items: "tops, womens-dresses, mens-shirts",
  },
  {
    cat: "Skin care",
    imgUrl: "skincare.jpg",
    items: "skincare",
  },
  {
    cat: "Watches",
    imgUrl: "watch.jpg",
    items: "mens-watches, womens-watches",
  },
  {
    cat: "Utilities",
    imgUrl: "utility.jpg",
    items: "lighting",
  },
  {
    cat: "Automotives",
    imgUrl: "automotive.jpg",
    items: "automotive, motorcycle",
  },
];

export const slidesData: slideDataType[] = [
  {
    type: "home-decor",
    heading: "Refresh your home with essential home decor products",
    description:
      "Check out our home decor items selection for the very best in unique or custom, handmade pieces from our shops.",
    imgUrl: "home-decor.png",
    bgColor: "rgb(181 255 184)",
    items: "home-decoration, furniture",
  },
  {
    type: "electronics",
    heading: "Shop the wide range of electronics with us",
    description:
      "Check out our latest electronic items with the outstanding features and with various offers.",
    imgUrl: "electronics.png",
    bgColor: "rgb(168 195 255 / 90%)",
    items: "smartphones, laptops",
  },
  {
    type: "skincare",
    heading: "Picks for the best skin care products for all skin types",
    description: "Do checkout out our affordable skincare products.",
    imgUrl: "skincare.png",
    bgColor: "rgb(237 206 206)",
    items: "skincare",
  },
];
