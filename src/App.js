import React, { Component } from "react";
import PostcardFrame from "./components/PostcardFrame";
import Peepers from "./components/Peepers";

class App extends Component {
  render() {
    return (
      <main>
        <PostcardFrame>
          <Peepers />
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
