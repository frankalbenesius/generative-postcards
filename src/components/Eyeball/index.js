import React from "react";
import PropTypes from "prop-types";
import jitter from "../../jitter";

const Eyeball = props => {
  // this jitter is tiny and mostly serves to make the eyes in an
  // Eyes component slightly different from each other
  const radiusPercent = jitter(7, 0.05);
  return (
    <circle
      cx={props.xPos * 100 + "%"}
      cy="50%"
      r={`${radiusPercent}%`}
      stroke="black"
      strokeWidth="1"
      fill="none"
    />
  );
};

Eyeball.propTypes = {
  xPos: PropTypes.number.isRequired // should be a percent
};

export default Eyeball;
