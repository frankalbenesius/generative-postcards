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
          <Eyeball cx="50%" />
        </TestFrame>
      </div>
      <div>
        <TestFrame width="200" height="150">
          <Eyeball cx="50%" />
        </TestFrame>
      </div>
      <div>
        <TestFrame width="300" height="200">
          <Eyeball cx="50%" />
        </TestFrame>
      </div>
    </div>
  ))
  .add("lots of cx prop values", () => (
    <TestFrame width="400" height="250">
      {range(5, 96, 10).map(n => (
        <Eyeball cx={`${n}%`} />
      ))}
    </TestFrame>
  ));
