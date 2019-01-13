import React from "react";
import { storiesOf } from "@storybook/react";
import range from "lodash/range";
import Torso from "./";
import Noggin from "../Noggin";
import TestFrame from "../TestFrame";

storiesOf("Torso", module)
  .add("Torsos in frames", () => (
    <div>
      <div>
        <TestFrame width={200} height={150}>
          <Torso cx={100} cy={75} width={100} height={100} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={300} height={200}>
          <Torso cx={150} cy={100} width={150} height={150} />
        </TestFrame>
      </div>
      <div>
        <TestFrame width={500} height={300}>
          <Torso cx={300} cy={200} width={150} height={150} />
          <Torso cx={80} cy={100} width={100} height={80} />
          <Torso cx={200} cy={80} width={100} height={80} />
          <Torso cx={230} cy={40} width={50} height={40} />
          <Torso cx={400} cy={40} width={50} height={50} />
          <Torso cx={350} cy={60} width={15} height={20} />
        </TestFrame>
      </div>
    </div>
  ))
  .add("Torso grid", () => (
    <div>
      {range(60).map(n => (
        <TestFrame key={n} width={100} height={120}>
          <Torso cx={50} cy={60} width={75} height={60} />
        </TestFrame>
      ))}
    </div>
  ))
  .add("Torso with a Noggin", () => (
    <TestFrame width={300} height={400}>
      <Torso cx={150} cy={250} width={120} height={150} />
      <Noggin cx={150} cy={150} height={100} width={150}/>
    </TestFrame>
  ))
