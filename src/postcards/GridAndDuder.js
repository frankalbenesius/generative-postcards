import React from "react";
import range from "lodash/range";
import Noggin from "../components/Noggin";

export default function() {
  return (
    <>
      {range(5).map(x =>
        range(10).map(y => (
          <Noggin
            cx={5 + x * 59 + 29.5}
            cy={5 + y * 39 + 19.5}
            width={59}
            height={39}
          />
        ))
      )}
      <text x={320} y={30} style={{ fontFamily: "monospace" }}>
        Click to redraw.
      </text>
      <Thorax cx={450} cy={250} width={120} height={150} />
      <Noggin cx={450} cy={150} height={100} width={150} />
    </>
  );
}
