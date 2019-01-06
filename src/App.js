import React, { Component } from "react";
import Eyeball from "./components/Eyeball";
import PostcardFrame from "./components/PostcardFrame";

class App extends Component {
  render() {
    return (
      <main>
        <PostcardFrame>
          <Eyeball xPos={0.5} />
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
