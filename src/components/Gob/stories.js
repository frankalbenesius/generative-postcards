import React from "react";
import { storiesOf } from "@storybook/react";
import Gob from "./";
import TestFrame from "../TestFrame";
import range from "lodash/range";
import Peepers from "../Peepers";

storiesOf("Gob", module)
  .add("in several svg frames", () => (
    <div>
      <div>
        <TestFrame width={100} height={100}>
          <Gob xPos={0.5} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={200} height={150}>
          <Gob xPos={0.5} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={300} height={200}>
          <Gob xPos={0.5} />
        </TestFrame>
      </div>
    </div>
  ))
  .add("lots 'o gobs with Peepers", () => (
    <div>
      {range(40).map(j => (
        <TestFrame key={j} width={150} height={100}>
          <Gob xPos={0.5} />
          <Peepers xPos={0.5} />
        </TestFrame>
      ))}
    </div>
  ));
