import React from "react";
import { storiesOf } from "@storybook/react";
import Eyeball from "./";
import TestFrame from "../TestFrame";
import range from "lodash/range";

storiesOf("Eyeball", module)
  .add("in several svg frames", () => (
    <div>
      <div>
        <TestFrame width="100" height="100">
          <Eyeball xPos={0.5} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width="200" height="150">
          <Eyeball xPos={0.5} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width="300" height="200">
          <Eyeball xPos={0.5} />
        </TestFrame>
      </div>
    </div>
  ))
  .add("lots of cx prop values", () => (
    <TestFrame width="400" height="250">
      {range(0.05, 0.96, 0.1).map(n => (
        <Eyeball xPos={n} />
      ))}
    </TestFrame>
  ));
