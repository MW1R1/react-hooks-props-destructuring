import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
const user = {
    n: 'Tyler McGinnis',
    h: '@tylermcginnis',
    l: 'Eden, Utah'
  };
  const { n: name, h: handle, l: location } = user;
console.log(name) // Tyler McGinnis
console.log(handle) // @tylermcginnis
console.log(location) // Eden, Utah

