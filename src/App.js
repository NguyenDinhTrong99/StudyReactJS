import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Welcome name="Niceky" />
    </div>
  );
}

function Welcome(props) {
  return (
    <div>
      <span>Hello, {props.name}! </span>
    </div>
  );
}
export default App;
