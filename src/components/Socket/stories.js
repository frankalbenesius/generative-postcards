import React from "react";
import { storiesOf } from "@storybook/react";
import Socket from "./";
import TestFrame from "../TestFrame";
import range from "lodash/range";

storiesOf("Socket", module)
  .add("in several svg frames", () => (
    <div>
      <div>
        <TestFrame width={100} height={100}>
          <Socket xPos={0.5} yPos={0.44} radius={0.07} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={200} height={150}>
          <Socket xPos={0.5} yPos={0.44} radius={0.03} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={300} height={200}>
          <Socket xPos={0.5} yPos={0.44} radius={0.09} />
        </TestFrame>
      </div>
    </div>
  ))
  .add("A VERY BIG ONE", () => (
    <TestFrame width={500} height={500}>
      <Socket xPos={0.5} yPos={0.5} radius={0.3} />
    </TestFrame>
  ))
  .add("lots of cx prop values", () => (
    <div>
      <p>Note the jitter.</p>
      <TestFrame width={400} height={250}>
        {range(0.1, 0.91, 0.05).map(n => (
          <Socket key={n} xPos={n} yPos={0.4} radius={0.07} />
        ))}
      </TestFrame>
    </div>
  ));