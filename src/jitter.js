import random from "lodash/random";

const jitter = (input, bounds = 0.1) => {
  const multiplier = random(-1 * bounds, bounds);
  const difference = input * multiplier;
  return input + difference;
};

export default jitter;
