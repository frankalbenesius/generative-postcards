import random from "lodash/random";

export default function fidget(initial, maxShift) {
  const absShift = maxShift * random();
  const plusOrMinus = random() < 0.5 ? -1 : 1;
  return initial + absShift * plusOrMinus;
}

/**
 * Generate fidgetted oval paths. Like Peepers and Noggin outlines.
 * @param {number} x center position x
 * @param {number} y center position y
 * @param {number} xr horizontal radius
 * @param {number} yr vertical radius
 */
export function fidgetOvalPath(x, y, xr, yr = xr) {
  const fx = x => fidget(x, xr / 5); // horizontal control point fidgeter
  const fy = y => fidget(y, yr / 5); // vertical control point fidgeter
  return `
    M ${x} ${y - yr}
    C ${fx(x + xr / 2)} ${y - yr}, ${x + xr} ${fy(y - yr / 2)}, ${x + xr} ${y}
    C ${x + xr} ${fy(y + yr / 2)}, ${fx(x + xr / 2)} ${y + yr}, ${x} ${y + yr}
    C ${fx(x - xr / 2)} ${y + yr}, ${x - xr} ${fy(y + yr / 2)}, ${x - xr} ${y}
    C ${x - xr} ${fy(y - yr / 2)}, ${fx(x - xr / 2)} ${y - yr}, ${x} ${y - yr}
    `;
}
