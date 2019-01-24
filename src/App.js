import React, { Component } from "react";
import PostcardFrame from "./components/PostcardFrame";
import NogginGrid from "./postcards/NogginGrid";

class App extends Component {
  state = 0;
  handleClick = () => {
    this.setState(x => x + 1);
  };
  render() {
    return (
      <main onClick={this.handleClick}>
        <PostcardFrame>
          <NogginGrid />
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
