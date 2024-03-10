import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import './styles.css';

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
    setSelectedProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const MemoizedProductItemCard = useMemo(() => React.memo(ProductItemCard), []);

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






// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import './styles.css';

// import { ProductItemCard } from "../ProductItemCard";
// import { ProductModal } from "../ProductModal/ProductModal";

// const ProductItemList = ({ products }) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setModalOpen(false);
//   };

//   const MemoizedProductItemCard = React.memo(ProductItemCard);

//   return (
//     <div>
//       <ul>
//         {products.map((product) => (
//           <MemoizedProductItemCard
//             key={product.id}
//             product={product}
//             onClick={() => openModal(product)}
//           />
//         ))}
//       </ul>

//       {modalOpen && (
//         <ProductModal
//           product={selectedProduct}
//           onClose={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// ProductItemList.propTypes = {
//   products: PropTypes.array.isRequired,
// };

// export { ProductItemList };






// import React from "react";
// import './styles.css';
// import PropTypes from "prop-types";
// import { ProductItemCard } from "../ProductItemCard";

// const ProductItemList = ({ products }) => {
//   const MemoizedProductItemCard = React.memo(ProductItemCard);
//   return (
//     <ul>
//       {products.map((product) => {
//         return <MemoizedProductItemCard key={product.id} product={product} />;
//       })}
//     </ul>
//   );
// };

// ProductItemList.propTypes = {
//   products: PropTypes.array.isRequired,
// };

// export { ProductItemList };
