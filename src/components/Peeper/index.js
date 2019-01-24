import React from "react";
import PropTypes from "prop-types";
import fidget, { fidgetOvalPath } from "../../fidget";

const Peeper = ({ cx, cy, r }) => {
  const fidgetR = fidget(r, r * 0.08);
  return (
    <path
      d={fidgetOvalPath(cx, cy, fidgetR, fidgetR, 0.2)}
      stroke="black"
      fill="none"
    />
  );
};

Peeper.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired
};

export default Peeper;
