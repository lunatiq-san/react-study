import React from "react";

const Painting = ({ url, title, target, profileUrl, tag, price }) => (
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
    <button type="button">Add in basket</button>
  </div>
);

export default Painting;
