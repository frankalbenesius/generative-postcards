import React from "react";
import PropTypes from "prop-types";
import { default as f } from "../../fidget";

const Gob = ({ cx, cy, width }) => {
  const hw = width / 2;

  const acy = f(cy, cy * 0.03);
  const bcy = f(cy, cy * 0.03);
  const acx = f(cx - hw, hw / 20);
  const bcx = f(cx + hw, hw / 20);

  const fy = cy => f(cy, cy * 0.1);
  return (
    <path
      d={`
        M ${acx} ${acy}
        C ${acx} ${fy(acy)}, ${bcx} ${fy(bcy)}, ${bcx} ${bcy}
      `}
      stroke="black"
      fill="none"
    />
  );
};

Gob.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  width: PropTypes.number
};

export default Gob;
