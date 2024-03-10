import PropTypes from "prop-types";
import './styles.css';

const ProductItemCard = ({ product }) => {
  return (
    <div>
      <ul>
        <li className="subscription__description">{product.title}</li>
      </ul>
    </div>
  );
};

ProductItemCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export { ProductItemCard };
