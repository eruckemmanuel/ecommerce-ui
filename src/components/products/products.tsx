import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ProductType } from "../../types/product";
import ProductItem from "./product-item";

const Products: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({});
  const [products, setProducts] = useState<ProductType[]>([]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const reponse = await api.loadProducts(params);
      setProducts(reponse.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [params]);

  return (
    <div>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
