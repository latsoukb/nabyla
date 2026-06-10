export type Category =
  | "vetements"
  | "turbans"
  | "hijabs"
  | "accessoires"
  | "beaute";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  image: string;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  quartier: string;
  notes?: string;
}

export type PaymentMethod = "wave" | "orange_money";

export interface Order {
  id: string;
  items: CartItem[];
  shipping: ShippingInfo;
  paymentMethod: PaymentMethod;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: "pending" | "paid" | "failed" | "cancelled";
  createdAt: string;
}
