export const VideoLesson = ({ products }) => {
  return (
    <div>
      <h2>Product list</h2>
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
