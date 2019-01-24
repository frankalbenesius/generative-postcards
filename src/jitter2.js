import random from "lodash/random";

const jitter = (input, bounds = 0.1) => {
  const multiplier = random(-1 * bounds, bounds);
  const difference = input * multiplier;
  return input + difference;
};

export const jitterAndMaybeNegate = (input, bounds) => {
  const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  return jitter(input, bounds) * plusOrMinus;
};

export default jitter;
