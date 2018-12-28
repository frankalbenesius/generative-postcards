import React from "react";
import { storiesOf } from "@storybook/react";
import Eyeball from "./";
import PostcardFrame from "../PostcardFrame";

storiesOf("Eyeball", module)
  .add("default", () => (
    <svg>
      <Eyeball />
    </svg>
  ))
  .add("in postcard frame", () => (
    <PostcardFrame>
      <Eyeball />
    </PostcardFrame>
  ));
