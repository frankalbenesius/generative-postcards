import React, { Component } from "react";
import PostcardFrame from "./components/PostcardFrame";
import Peepers from "./components/Peepers";
import Gob from "./components/Gob";

class App extends Component {
  render() {
    return (
      <main>
        <PostcardFrame>
          <Peepers xPos={0.5} />
          <Gob xPos={0.5} />
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
