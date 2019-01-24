import React from "react";
import PropTypes from "prop-types";
import Peeper from "../Peeper";
import fidget from "../../fidget";

const Peepers = ({ cx, cy, r, xOffset }) => {
  const fx = cx => fidget(cx, xOffset / 12);
  const fy = cy => fidget(cy, xOffset / 18);
  return (
    <>
      <Peeper cx={fx(cx - xOffset)} cy={fy(cy)} r={r} />
      <Peeper cx={fx(cx + xOffset)} cy={fy(cy)} r={r} />
    </>
  );
};

Peepers.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  xOffset: PropTypes.number.isRequired
};

export default Peepers;
