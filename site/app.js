import React from "react";
import ReactDOM from "react-dom";
import "./base.css";
// import "./flex.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
// import {
//   Demo,
//   Demo01,
//   Demo02,
//   Demo03,
//   Demo04,
//   Demo05,
// } from "./components/Flexbox";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
