import PropTypes from "prop-types";
import './styles.css';

const ProductItemCard = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
};

ProductItemCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export { ProductItemCard };
