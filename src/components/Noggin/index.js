import React from "react";
import PropTypes from "prop-types";
import Peepers from "../Peepers";
import Gob from "../Gob";
import { fidgetOvalPath } from "../../fidget";

const Noggin = ({ cx, cy, width, height }) => {
  return (
    <>
      <path
        d={fidgetOvalPath(cx, cy, width * 0.47, height * 0.47, 0.115)}
        stroke="black"
        fill="none"
      />
      <Peepers
        cx={cx}
        cy={cy - height * 0.1}
        r={height * 0.071}
        xOffset={width * 0.22}
      />
      <Gob cx={cx} cy={cy + height * 0.15} width={width * 0.6} />
    </>
  );
};

Noggin.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Noggin;
