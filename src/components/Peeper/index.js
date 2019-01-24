import React from "react";
import PropTypes from "prop-types";
import { fidgetOvalPath } from "../../fidget";

const Peeper = ({ x, y, r }) => {
  return <path d={fidgetOvalPath(x, y, r)} stroke="black" fill="none" />;
};

Peeper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired
};

export default Peeper;
