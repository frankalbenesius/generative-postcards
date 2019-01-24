import React from "react";
import PropTypes from "prop-types";
import { default as f } from "../../fidget";

const Gob = ({ x, y, width }) => {
  const hw = width / 2;

  const aY = f(y, y * 0.03);
  const bY = f(y, y * 0.03);
  const aX = f(x - hw, hw / 20);
  const bX = f(x + hw, hw / 20);

  const fy = y => f(y, y * 0.2);
  return (
    <path
      d={`
        M ${aX} ${aY}
        C ${aX} ${fy(aY)}, ${bX} ${fy(bY)}, ${bX} ${bY}
      `}
      stroke="black"
      fill="none"
    />
  );
};

Gob.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number
};

export default Gob;
