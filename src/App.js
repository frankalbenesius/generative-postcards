import React, { Component } from "react";
import Eyeball from "./components/Eyeball";
import PostcardFrame from "./components/PostcardFrame";

class App extends Component {
  render() {
    return (
      <main>
        <PostcardFrame>
          <Eyeball />
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
