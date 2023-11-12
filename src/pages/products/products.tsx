import React from "react";
import Products from "../../components/products";

const ProductsPage: React.FC = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="display-5">Products</div>
      </div>

      <div className="mt-4">
        <Products />
      </div>
    </div>
  );
};

export default ProductsPage;
