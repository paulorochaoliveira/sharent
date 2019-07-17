export interface Product {
  id: string;
  UserId: string;
  product_name: string;
  description: string;
  price: string;
  imagePath: string;
  createdAt: string;
  updatedAt: string;
  category: {id: string, name: string}
}
