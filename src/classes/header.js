import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  // check what the values were before the update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }

  // called after the component is updated
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={mystyle}>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Header;
