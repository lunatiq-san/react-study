import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.jpg";

const Painting = ({ url, title, target, profileUrl, tag, price, quantity }) => {
  const availability = quantity < 10 ? "Ends" : "In stock";
  return (
    <div>
      <img src={url} alt={title} width="120" target={target} />
      <h2>{title}</h2>
      <p>
        Author:
        <a href={profileUrl} target={target}>
          {tag}
        </a>
      </p>
      <p>Price: {price} credits</p>
      {/* Conditional render */}
      <p>Balance: {availability}</p>
      <button type="button">Add in basket</button>
    </div>
  );
};

// 99% props don't have defaultProps
// for default picture use local picture
// for isRequired property don't write defaultProps
// for !isRequired property 100% use defaultProps
Painting.defaultProps = {
  url: defaultImage,
};

// Describe all received props
Painting.propTypes = {
  url: PropTypes.string,
  // Required property. 99% property required
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
