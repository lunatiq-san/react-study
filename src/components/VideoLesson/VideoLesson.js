export const VideoLesson = ({ products, children }) => {
  return (
    <div>
      {children}
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
  children: <h2>Default props children</h2>,
};
