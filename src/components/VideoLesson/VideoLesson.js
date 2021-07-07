import PropTypes from "prop-types";

export const VideoLesson = ({ products, price, children }) => {
  return (
    <div>
      <h2>{children}</h2>
      <h2>{price}$</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}$</p>
            <img src={product.image} alt={product.name} width="320" />
          </li>
        ))}
      </ul>
    </div>
  );
};

VideoLesson.defaultProps = {
  children: "Default props children",
  price: 9.99,
};

VideoLesson.propTypes = {
  children: PropTypes.string,
  price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
