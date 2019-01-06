import React from "react";
import { storiesOf } from "@storybook/react";
import TestFrame from "./";

storiesOf("TestFrame", module).add("an <svg> frame for testing", () => (
  <TestFrame width="400" height="200" />
));
