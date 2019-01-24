import React from "react";
import PropTypes from "prop-types";
import jitter from "../../jitter2";

const Thorax = p => {
  // const facing = 0.5;

  const w = p.width;
  const h = p.height;
  const j = x => jitter(x, 0.1);

  return (
    <svg
      x={p.cx - p.width * 0.5}
      y={p.cy - p.height * 0.5}
      width={p.width}
      height={p.height}
      style={{ overflow: "visible" }}
    >
      <path
        d={`
          M ${w * 0.5} 0
          C ${j(w * 0.95)} 0,   ${w} ${j(h * 0.2)}, ${w} ${h * 0.33}
          C ${w} ${j(h * 0.7)}, ${j(w * 0.8)} ${h}, ${w * 0.5} ${h}
          C ${j(w * 0.2)} ${h}, 0 ${j(h * 0.7)}, 0  ${h * 0.33}
          C 0 ${j(h * 0.2)},    ${j(w * 0.05)} 0,          ${w * 0.5} 0
        `}
        stroke="black"
        strokeWidth="1"
        fill="white"
        vectorEffect="non-scaling-stroke" // keeps stroke width 1 px
      />
    </svg>
  );
};

Thorax.propTypes = {
  // facing
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Thorax;
