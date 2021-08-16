import React from "react";
import Car from "./car";

class Garage extends React.Component {
  render() {
    const carname = "Audi";
    const carcolor = "Gray";
    const carmodel = "TT";
    const carinfo = { name: "Ford", model: "Mustang" };
    return (
      <div>
        <h1>Who lives in my garage?</h1>
        <Car brand={carname} color={carcolor} model={carmodel} />
        {/* <Car brand={carinfo} /> */}
      </div>
    );
  }
}

export default Garage;
