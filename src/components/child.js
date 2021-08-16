import React from "react";

class Child extends React.Component {
  // called when the component is about to be removed from the DOM.
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Child;
