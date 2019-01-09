import React, { Component } from "react";
import PostcardFrame from "./components/PostcardFrame";
import Peepers from "./components/Peepers";
import Gob from "./components/Gob";

class App extends Component {
  state = 0;
  handleClick = () => {
    this.setState(x => x + 1);
  };
  render() {
    return (
      <main onClick={this.handleClick}>
        <PostcardFrame>
          <Peepers xPos={0.5} />
          <Gob xPos={0.5} />
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
