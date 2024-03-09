import React from "react";
import './styles.css';
import PropTypes from "prop-types";
import { ProductItemCard } from "../ProductItemCard";

const ProductItemList = ({ products }) => {
  const MemoizedProductItemCard = React.memo(ProductItemCard);
  return (
    <ul>
      {products.map((product) => {
        return <MemoizedProductItemCard key={product.id} product={product} />;
      })}
    </ul>
  );
};

ProductItemList.propTypes = {
  products: PropTypes.array.isRequired,
};

export { ProductItemList };
