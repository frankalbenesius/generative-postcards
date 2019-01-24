import React from "react";
import { storiesOf } from "@storybook/react";
import Noggin from "./";
import TestFrame from "../TestFrame";
import range from "lodash/range";

storiesOf("Noggin", module)
  .add("in several svg frames", () => {
    const frames = [[100, 100], [200, 150], [400, 300]];
    return frames.map(([width, height]) => {
      return (
        <div>
          <TestFrame width={width} height={height}>
            <Noggin cx={50} cy={37.5} width={80} height={60} />
          </TestFrame>
        </div>
      );
    });
  })
  .add("noggin grid", () => (
    <div>
      {range(60).map(n => (
        <TestFrame key={n} width={100} height={75}>
          <Noggin cx={50} cy={37.5} width={80} height={60} />
        </TestFrame>
      ))}
    </div>
  ));
