import React from "react";
import PropTypes from "prop-types";

const Eyeball = props => {
  return (
    <circle
      cx={props.xPos * 100 + "%"}
      cy="50%"
      r="7%"
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
