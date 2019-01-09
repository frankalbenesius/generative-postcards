import React from "react";
import PropTypes from "prop-types";
import jitter from "../../jitter";

const Eyeball = props => {
  // this jitter is tiny and mostly serves to make the eyes in an
  // Eyes component slightly different from each other
  const r = jitter(props.radius, 0.1);
  const cy = jitter(props.yPos, 0.03);
  return (
    <circle
      cx={props.xPos * 100 + "%"}
      cy={cy * 100 + "%"}
      r={r * 100 + "%"}
      stroke="black"
      strokeWidth="1"
      fill="white"
    />
  );
};

Eyeball.propTypes = {
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired
};

export default Eyeball;
