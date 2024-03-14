import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ProductModal = ({ product, onClose, onNext, onPrev }) => {
  return (
    <div className={styles["product-modal"]}>
      <div className={styles["modal-content"]}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <h2 className={styles["product-title"]}>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className={styles["product-image"]}
        />
        <p className={styles["product-description"]}>{product.description}</p>
        <p className={styles["product-price"]}>Price: {product.price}</p>

        <div className={styles.navigation}>
          <button className={styles["nav-button"]} onClick={onPrev}>
            &lt;
          </button>
          <button className={styles["nav-button"]} onClick={onNext}>
            &gt;
          </button>
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
