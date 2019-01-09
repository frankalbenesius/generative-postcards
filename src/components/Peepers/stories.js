import React from "react";
import { storiesOf } from "@storybook/react";
import Peepers from "./";
import TestFrame from "../TestFrame";
import range from "lodash/range";

storiesOf("Peepers", module).add("in several svg frames", () => (
  <div>
    <div>
      <TestFrame width={100} height={100}>
        <Peepers xPos={0.5} />
      </TestFrame>
      &emsp;
      <TestFrame width={100} height={100}>
        {range(10).map(i => (
          <Peepers xPos={0.5} key={i} />
        ))}
      </TestFrame>
      &emsp;
      <TestFrame width={50} height={100}>
        <Peepers xPos={0.5} />
      </TestFrame>
      &emsp;
      <TestFrame width={50} height={100}>
        <Peepers xPos={0.5} />
      </TestFrame>
    </div>
    <div>
      <TestFrame width={200} height={150}>
        <Peepers xPos={0.5} />
      </TestFrame>
      &emsp;
      <TestFrame width={300} height={100}>
        {range(10).map(i => (
          <Peepers xPos={0.5} key={i} />
        ))}
      </TestFrame>
    </div>
    <div>
      <TestFrame width={300} height={200}>
        <Peepers xPos={0.5} />
      </TestFrame>
      &emsp;
      <TestFrame width={200} height={200}>
        {range(10).map(i => (
          <Peepers xPos={0.5} key={i} />
        ))}
      </TestFrame>
    </div>
  </div>
));
