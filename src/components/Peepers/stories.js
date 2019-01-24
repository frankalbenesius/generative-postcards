import React from "react";
import { storiesOf } from "@storybook/react";
import Peepers from "./";
import TestFrame from "../TestFrame";

storiesOf("Peepers", module).add("in several svg frames", () => {
  const frames = [[100, 100], [200, 150], [400, 300]];
  return frames.map(([width, height]) => {
    return (
      <div>
        <TestFrame width={width} height={height}>
          <Peepers
            x={width / 2}
            y={height / 2}
            r={height / 10}
            xOffset={width / 4}
          />
        </TestFrame>
      </div>
    );
  });
});
