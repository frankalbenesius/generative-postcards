import React from "react";
import PropTypes from "prop-types";
import jitter from "../../jitter";
import Peepers from "../Peepers";
import Gob from "../Gob";

const Noggin = props => {
  const facing = 0.5;

  const hw = props.width / 2;
  const hh = props.height / 2;
  const j = x => jitter(x, 0.15);

  return (
    <svg
      x={props.cx - props.width / 2}
      y={props.cy - props.height / 2}
      width={props.width}
      height={props.height}
      style={{ overflow: "visible" }}
    >
      <path
        d={`
          M ${hw} 0
          c ${hw * j(0.6)} 0,  ${hw} ${hh * j(0.4)},   ${hw} ${hh}
          c 0 ${hh * j(0.6)},  ${-hw * j(0.4)} ${hh},  ${-hw} ${hh}
          c ${-hw * j(0.6)} 0, ${-hw} ${-hh * j(0.4)}, ${-hw} ${-hh}
          c 0 ${-hh * j(0.6)}, ${hw * j(0.4)} ${-hh},  ${hw} ${-hh}
        `}
        stroke="black"
        strokeWidth="1"
        fill="white"
        vectorEffect="non-scaling-stroke" // keeps stroke width 1 px
      />
      <Peepers xPos={facing} />
      <Gob xPos={facing} />
    </svg>
  );
};

Noggin.propTypes = {
  // facing
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Noggin;
