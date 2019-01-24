import React from "react";
import { storiesOf } from "@storybook/react";
import Peeper from "./";
import TestFrame from "../TestFrame";

storiesOf("Peeper", module).add("in several svg frames", () => {
  const frames = [[100, 100], [200, 150], [400, 300]];
  return frames.map(([width, height]) => {
    return (
      <div>
        <TestFrame width={width} height={height}>
          <Peeper x={width / 2} y={height / 2} r={height / 8} />
        </TestFrame>
      </div>
    );
  });
});
