import React from "react";
import PropTypes from "prop-types";
import fidget, { fidgetOvalPath } from "../../fidget";

const Peeper = ({ x, y, r }) => {
  const fidgetR = fidget(r, r * 0.08);
  return <path d={fidgetOvalPath(x, y, fidgetR)} stroke="black" fill="none" />;
};

Peeper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired
};

export default Peeper;
