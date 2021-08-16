import React, { Component } from "react";
import "./App.css";
// Classes
import Car from "./classes/car";
import Model from "./classes/model";
import Header from "./classes/header";
// Components
import CarComponent from "./components/car";
import Garage from "./components/garage";
import Container from "./components/container";
import Football from "./components/football";
import MyForm from "./components/myform";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{new Car("Ford").present()}</h1>
        {/* 
        
        <h1>{new Model("Ford", "Mustang").show()}</h1>
        <CarComponent color="gray" brand="audi" model="TT" />
        <Garage />
        <Header />
        <Container />
        <Football />
        <MyForm /> 
        */}
      </div>
    );
  }
}

export default App;
