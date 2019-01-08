import React from "react";
import PropTypes from "prop-types";
import Eyeball from "../Eyeball";
import jitter from "../../jitter";

const Peepers = props => {
  // const radiusPercent = jitter(7, 0.05);
  const yPos = jitter(0.42, 0.06);
  const eyeSeparation = jitter(0.55, 0.18);
  const xLeft = 0.5 - eyeSeparation / 2;
  const xRight = 0.5 + eyeSeparation / 2;
  const radius = jitter(0.05, 0.3);
  return (
    <g>
      <Eyeball xPos={xLeft} yPos={yPos} radius={radius} />
      <Eyeball xPos={xRight} yPos={yPos} radius={radius} />
    </g>
  );
};

Peepers.propTypes = {};

export default Peepers;
