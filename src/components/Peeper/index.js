import React from "react";
import PropTypes from "prop-types";
import jitter from "../../jitter";

const Peeper = props => {
  // 100x lets us work in the relative svg
  const xPos = props.xPos * 100;
  const r = jitter(props.radius, 0.1) * 100; // differentiates Peepers in a Peepers
  const yPos = jitter(props.yPos, 0.03) * 100; // center of Peeper, determines height

  const ctrlJit = () => jitter(r / 2, 0.23); // this make it a non-perfect circle
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      style={{ background: "red" }}
    >
      <path
        d={`
          M ${xPos} ${yPos - r}
          c ${ctrlJit()} 0, ${r} ${ctrlJit()}, ${r} ${r}
          c 0 ${ctrlJit()}, ${-ctrlJit()} ${r}, ${-r} ${r}
          c ${-ctrlJit()} 0, ${-r} ${-ctrlJit()}, ${-r} ${-r}
          c 0 ${-ctrlJit()} ${ctrlJit()} ${-r}, ${r} ${-r}
        `}
        stroke="black"
        strokeWidth="1"
        fill="white"
        vectorEffect="non-scaling-stroke" // keeps stroke width 1 px
      />
    </svg>
  );
};

Peeper.propTypes = {
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired
};

export default Peeper;
