import React from "react";
import range from "lodash/range";
import Noggin from "../components/Noggin";

export default function({ x, y, width, height }) {
  const n = 10;
  return (
    <>
      {range(n).map(i =>
        range(n).map(j => (
          <Noggin
            cx={x + (width / n) * i + width / n / 2}
            cy={y + (height / n) * j + height / n / 2}
            width={width / n}
            height={height / n}
          />
        ))
      )}
    </>
  );
}
