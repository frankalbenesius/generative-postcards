import React from "react";
import PropTypes from "prop-types";
import Peepers from "../Peepers";
import Gob from "../Gob";
import { fidgetOvalPath } from "../../fidget";

const Noggin = ({ cx, cy, width, height }) => {
  console.log(width);
  console.log(height);
  return (
    <>
      <path
        d={fidgetOvalPath(cx, cy, width * 0.45, height * 0.45, 0.1)}
        stroke="black"
        fill="none"
      />
      <Peepers
        cx={width / 2}
        cy={height * 0.45}
        r={height * 0.071}
        xOffset={width * 0.22}
      />
      <Gob cx={width / 2} cy={height * 0.65} width={width * 0.6} />
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
