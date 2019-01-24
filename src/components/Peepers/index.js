import React from "react";
import PropTypes from "prop-types";
import Peeper from "../Peeper";
import fidget from "../../fidget";

const Peepers = ({ x, y, r, xOffset }) => {
  const fx = x => fidget(x, xOffset / 12);
  const fy = y => fidget(y, xOffset / 18);
  return (
    <g>
      <Peeper x={fx(x - xOffset)} y={fy(y)} r={r} />
      <Peeper x={fx(x + xOffset)} y={fy(y)} r={r} />
    </g>
  );
};

Peepers.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  xOffset: PropTypes.number.isRequired
};

export default Peepers;
