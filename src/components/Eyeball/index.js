import React from "react";
import PropTypes from "prop-types";

const Eyeball = props => {
  return (
    <circle
      cx={props.cx}
      cy="50%"
      r="7%"
      stroke="black"
      strokeWidth="1"
      fill="none"
    />
  );
};

Eyeball.propTypes = {
  cx: PropTypes.number.isRequired
};

export default Eyeball;
