import React from "react";
import PropTypes from "prop-types";
import jitter, { jitterAndMaybeNegate } from "../../jitter";

const Gob = props => {
  const height = jitter(0.6 * 100, 0.05);
  const width = jitter(70, 0.2);
  const startAt = props.xPos * 100 - width / 2;
  const baseSmileTurn = jitterAndMaybeNegate(2, 0.4);
  const leftTurn = jitter(baseSmileTurn, 1);
  const rightTurn = jitter(baseSmileTurn, 1);
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d={`
          M ${startAt} ${height}
          c 0 ${leftTurn}, ${width} ${rightTurn}, ${width} 0
        `}
        stroke="black"
        strokeWidth="1"
        fill="none"
        vectorEffect="non-scaling-stroke" // keeps stroke width 1 px
      />
    </svg>
  );
};

Gob.propTypes = {
  xPos: PropTypes.number
};

Gob.defaultProps = {
  xPos: 0.5
};

export default Gob;
