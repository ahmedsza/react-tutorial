import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      description: "The content of a textarea goes in the value attribute",
      mycar: "Volvo",
      errormessage: "",
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };

  selectChangeHandler = (event) => {
    this.setState({ mycar: event.target.value });
  };

  mySubmitHandler = (event) => {
    // use event.preventDefault() to prevent the form from actually being submitted
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        <p style={{ color: "red" }}>{this.state.errormessage}</p>
        <textarea value={this.state.description} />
        <br />
        <select
          value={this.state.mycar}
          style={{ width: "180px" }}
          onChange={this.selectChangeHandler}
        >
          <option value="Ford">Ford</option>
          <option value="Volvo" defaultValue>
            Volvo
          </option>
          <option value="Fiat">Fiat</option>
        </select>
        <br />
        <input type="submit" style={{ marginTop: "10px" }} />
      </form>
    );
  }
}

export default MyForm;
