import React, { Component } from "react";
import range from "lodash/range";
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
          {range(10).map(x =>
            range(10).map(y => (
              <Noggin
                cx={5 + x * 59 + 29.5}
                cy={5 + y * 39 + 19.5}
                width={59}
                height={39}
              />
            ))
          )}
        </PostcardFrame>
      </main>
    );
  }
}

export default App;
