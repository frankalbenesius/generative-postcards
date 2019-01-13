import React from "react";
import range from "lodash/range";
import Noggin from "../components/Noggin";

export default function() {
  return (
    <>
      {range(10).map(x =>
        range(10).map(y => (
          <Noggin
            cx={5 + x * 59 + 29.5}
            cy={5 + y * 39 + 19.5}
            width={59}
            height={39}
          />
        ))
      )}
    </>
  );
}
