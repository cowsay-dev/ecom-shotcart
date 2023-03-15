export type CategoryType = {
  cat: string;
  imgUrl: string;
  items: string;
};

export type slideDataType = {
  type: string;
  heading: string;
  description: string;
  imgUrl: string;
  bgColor: string;
  items: string;
};

export interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface CartProdInterface {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  discountPercentage: number;
  actualPrice: number;
  quantity: number;
}

export interface CartInterface {
  total: number;
  actualPrice: number;
  product: CartProdInterface[];
  discountedTotal: number;
  totalProducts: number;
}
