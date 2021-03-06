import random from "lodash/random";

export default function fidget(initial, maxShift) {
  const absShift = maxShift * random();
  const plusOrMinus = random() < 0.5 ? -1 : 1;
  return initial + absShift * plusOrMinus;
}

/**
 * Generate fidgetted oval paths. Like Peepers and Noggin outlines.
 * @param {number} cx center position x
 * @param {number} cy center position y
 * @param {number} xr horizontal radius
 * @param {number} yr vertical radius
 * @param {number} stablizer amount to fidget
 */
export function fidgetOvalPath(cx, cy, xr, yr, stabilizer = 0.125) {
  const fx = cx => fidget(cx, xr * stabilizer); // horizontal control point fidgeter
  const fy = cy => fidget(cy, yr * stabilizer); // vertical control point fidgeter
  const hxr = xr / 2;
  const hyr = yr / 2;
  return `
  M ${cx} ${cy - yr}
  C ${fx(cx + hxr)} ${cy - yr}, ${cx + xr} ${fy(cy - hyr)}, ${cx + xr} ${cy}
  C ${cx + xr} ${fy(cy + hyr)}, ${fx(cx + hxr)} ${cy + yr}, ${cx} ${cy + yr}
  C ${fx(cx - hxr)} ${cy + yr}, ${cx - xr} ${fy(cy + hyr)}, ${cx - xr} ${cy}
  C ${cx - xr} ${fy(cy - hyr)}, ${fx(cx - hxr)} ${cy - yr}, ${cx} ${cy - yr}
  `;
}
