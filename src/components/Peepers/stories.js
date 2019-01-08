import React from "react";
import { storiesOf } from "@storybook/react";
import Peepers from "./";
import TestFrame from "../TestFrame";
import range from "lodash/range";

storiesOf("Peepers", module).add("in several svg frames", () => (
  <div>
    <div>
      <TestFrame width={100} height={100}>
        <Peepers />
      </TestFrame>
      &emsp;
      <TestFrame width={100} height={100}>
        {range(10).map(i => (
          <Peepers key={i} />
        ))}
      </TestFrame>
      &emsp;
      <TestFrame width={50} height={100}>
        <Peepers />
      </TestFrame>
      &emsp;
      <TestFrame width={50} height={100}>
        <Peepers />
      </TestFrame>
    </div>
    <div>
      <TestFrame width={200} height={150}>
        <Peepers />
      </TestFrame>
      &emsp;
      <TestFrame width={300} height={100}>
        {range(10).map(i => (
          <Peepers key={i} />
        ))}
      </TestFrame>
    </div>
    <div>
      <TestFrame width={300} height={200}>
        <Peepers />
      </TestFrame>
      &emsp;
      <TestFrame width={200} height={200}>
        {range(10).map(i => (
          <Peepers key={i} />
        ))}
      </TestFrame>
    </div>
  </div>
));
