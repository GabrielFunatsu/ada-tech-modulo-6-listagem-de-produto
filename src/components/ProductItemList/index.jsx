import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./styles.css";

import { ProductItemCard } from "../ProductItemCard";
import { ProductModal } from "../ProductModal/ProductModal";

const ProductItemList = ({ products }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProductIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProductIndex(null);
    setModalOpen(false);
  };

  const nextProduct = () => {
    setSelectedProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setSelectedProductIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const MemoizedProductItemCard = useMemo(
    () => React.memo(ProductItemCard),
    []
  );

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <MemoizedProductItemCard
            key={product.id}
            product={product}
            onClick={() => openModal(index)}
          />
        ))}
      </ul>

      {modalOpen && (
        <ProductModal
          product={products[selectedProductIndex]}
          onClose={closeModal}
          onNext={nextProduct}
          onPrev={prevProduct}
        />
      )}
    </div>
  );
};

ProductItemList.propTypes = {
  products: PropTypes.array.isRequired,
};

export { ProductItemList };
