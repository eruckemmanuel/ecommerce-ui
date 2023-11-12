export type ProductMeta = {
  expiryDate?: string;
  reference: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number | null;
  metadata: ProductMeta;
};
