import React from "react";
import { storiesOf } from "@storybook/react";
import range from "lodash/range";
import Noggin from "./";
import TestFrame from "../TestFrame";

storiesOf("Noggin", module)
  .add("noggins in frames", () => (
    <div>
      <div>
        <TestFrame width={200} height={150}>
          <Noggin cx={100} cy={75} width={180} height={100} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={300} height={200}>
          <Noggin cx={150} cy={100} width={250} height={150} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={500} height={300}>
          <Noggin cx={300} cy={200} width={250} height={150} />
          <Noggin cx={80} cy={100} width={100} height={80} />
          <Noggin cx={200} cy={80} width={100} height={80} />
          <Noggin cx={230} cy={40} width={50} height={40} />
          <Noggin cx={400} cy={40} width={50} height={50} />
          <Noggin cx={350} cy={60} width={30} height={20} />
        </TestFrame>
      </div>
    </div>
  ))
  .add("noggin grid", () => (
    <div>
      {range(60).map(n => (
        <TestFrame key={n} width={100} height={75}>
          <Noggin cx={50} cy={37.5} width={80} height={60} />
        </TestFrame>
      ))}
    </div>
  ));
