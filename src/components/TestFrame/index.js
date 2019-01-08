import React from "react";
import PropTypes from "prop-types";

const TestFrame = props => {
  return (
    <svg
      width={props.width}
      height={props.height}
      style={{ background: "lavender" }}
    >
      <text x="5%" y="90%" fontSize="12px" fontFamily="monospace">
        {props.width}x{props.height}
      </text>
      {props.children}
    </svg>
  );
};

TestFrame.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default TestFrame;
