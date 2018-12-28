import React from "react";
import { storiesOf } from "@storybook/react";
import PostcardFrame from "./";

storiesOf("PostcardFrame", module).add("on padded black bg", () => (
  <div style={{ background: "black", padding: "1rem" }}>
    <PostcardFrame>
      <text x="10" y="22">
        "0 0 600 400" viewBox, 6x4 ratio
      </text>
    </PostcardFrame>
  </div>
));
