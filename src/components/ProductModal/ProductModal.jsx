import PropTypes from "prop-types";
import './styles.css';

const ProductModal = ({ product, onClose, onNext, onPrev }) => {
  return (
    <div className="product-modal">
      <div className="modal-content">
        
        <span className="close" onClick={onClose}>&times;</span>
        
        <h2 className="product-title">{product.title}</h2>
        <img src={product.image} alt={product.title} className="product-image" />
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: {product.price}</p>
        
        <div className="navigation">
          <button className="nav-button" onClick={onPrev}>&lt;</button>
          <button className="nav-button" onClick={onNext}>&gt;</button>
        </div>
        
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export { ProductModal };






// import PropTypes from "prop-types";
// import './styles.css';

// const ProductModal = ({ product, onClose }) => {
//   return (
//     <div className="product-modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>{product.title}</h2>
//         <br />
//         <p>{product.description}</p>
//         <br />
//         <p>Price: {product.price}</p>
//         {/* Add more product details as needed */}
//       </div>
//     </div>
//   );
// };

// ProductModal.propTypes = {
//   product: PropTypes.object.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export { ProductModal };
