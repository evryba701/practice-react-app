import React, { Component } from "react";
import { Fcomnent } from "./Fcomnent";
import { Ccomponent } from "./Ccomponent";
import Menu from "./Menu";

class App extends Component {
  state = {
    name: "Nikita",
  };
  render() {
    return (
      <div className="App">
        <Fcomnent name={this.state.name} />
        <Ccomponent name="alex" />
        <Menu />
      </div>
    );
  }
}

export { App };
