import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.name}</h1>
        <p>hello react</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App name="garyzgong" />, document.getElementById("app"));
