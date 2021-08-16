import React from "react";
import Child from "./child";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true, method: "Delete" };
  }
  delHeader = () => {
    this.setState({
      show: !this.state.show,
      method: this.state.method === "Delete" ? "Create" : "Delete",
    });
  };
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          {this.state.method} Header
        </button>
      </div>
    );
  }
}

export default Container;
