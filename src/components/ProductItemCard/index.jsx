import PropTypes from "prop-types";
import "./styles.css";

const ProductItemCard = ({ product, onClick }) => {
  return (
    <div>
      <ul>
        <li className="subscription__description" onClick={onClick}>
          {product.title}
        </li>
      </ul>
    </div>
  );
};

ProductItemCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ProductItemCard };
