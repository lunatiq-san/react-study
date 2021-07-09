import React from 'react';
import PropTypes from 'prop-types';

// if static styles
const styles = {
  container: {
    width: '50%',
    outline: '1px solid tomato',
  },
};

const Panel = ({ title, children }) => (
  <div style={styles.container}>
    {/* if title === true -> render <h2>{title}</h2> */}
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  children: [],
};

// If children -> PropTypes.node
Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
