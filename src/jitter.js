import random from "lodash/random";

const jitter = (input, limit = 0.1) => {
  const multiplier = random(-1 * limit, limit);
  return input + input * multiplier;
};

export default jitter;
