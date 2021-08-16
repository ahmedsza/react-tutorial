import React from "react";

class Football extends React.Component {
  shoot = (a, b) => {
    // the this keyword should represent the component that owns the method.
    // The 'this' keyword refers to the component object
    alert(`${a}, event type: ${b.type}`);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  };
  render() {
    return (
      <button onClick={(event) => this.shoot("Goal", event)}>
        Take the shot!
      </button>
    );
  }
}

export default Football;
