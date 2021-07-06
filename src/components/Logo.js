import React from "react";
import PropTypes from "prop-types";

const Logo = ({ text }) => <h2>{text}</h2>;

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
