import React from "react";
import PropTypes from "prop-types";
import jitter from "../../jitter";

const Eyeball = props => {
  const radiusPercent = jitter(7);
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
