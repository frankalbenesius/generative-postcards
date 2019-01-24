import React from "react";
import PropTypes from "prop-types";
import Peeper from "../Peeper";
import jitter from "../../jitter2";

const Peepers = props => {
  const yPos = jitter(0.42, 0.06);
  const eyeSeparation = jitter(0.7, 0.18);
  const xLeft = props.xPos - eyeSeparation / 2;
  const xRight = props.xPos + eyeSeparation / 2;
  const radius = jitter(0.05, 0.3);
  return (
    <g>
      <Peeper xPos={xLeft} yPos={yPos} radius={radius} />
      <Peeper xPos={xRight} yPos={yPos} radius={radius} />
    </g>
  );
};

Peepers.propTypes = {
  xPos: PropTypes.number.isRequired
};

export default Peepers;
