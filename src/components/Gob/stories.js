import React from "react";
import { storiesOf } from "@storybook/react";
import Gob from "./";
import TestFrame from "../TestFrame";

storiesOf("Gob", module).add("in several svg frames", () => {
  const frames = [[100, 100], [200, 150], [400, 300]];
  return frames.map(([width, height]) => {
    return (
      <div>
        <TestFrame width={width} height={height}>
          <Gob x={width / 2} y={height / 2} width={width * 0.8} />
        </TestFrame>
      </div>
    );
  });
});
