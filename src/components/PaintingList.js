import React from "react";
import PropTypes from "prop-types";
import Painting from "./Painting";

// If we have Component, he don't import data in himself. Should receive as props
const PaintingList = ({ items }) => (
  <ul>
    {items.map(({ id, url, title, price, author, quantity }) => (
      // key={index} for static collection
      // 99% our collection will be dynamic
      <li key={id}>
        <Painting
          url={url}
          title={title}
          price={price}
          profileUrl={author.url}
          tag={author.tag}
          target="_blank"
          quantity={quantity}
        />
      </li>
    ))}
  </ul>
);

// If prop is array -> shape(what format?)
PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PaintingList;
