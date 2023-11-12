import React from "react";
import { ProductType } from "../../types/product";

interface ProductItemInterface {
  product: ProductType;
}

const ProductItem: React.FC<ProductItemInterface> = ({
  product,
}: ProductItemInterface) => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <h4>{product.name}</h4>
        </div>
        <div className="mt-4">
          <p>{product.description}</p>
        </div>
        <div className="mt-4">
          <p className="text-primary">$ {product.price?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
