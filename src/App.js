import React, { Component } from "react";
import PostcardFrame from "./components/PostcardFrame";
import Noggin from "./components/Noggin";

class App extends Component {
  state = 0;
  handleClick = () => {
    this.setState(x => x + 1);
  };
  render() {
    return (
      <main onClick={this.handleClick}>
        <PostcardFrame>
          <Noggin cx={300} cy={200} width={500} height={300} />
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
