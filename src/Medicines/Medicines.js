import React, { Component } from "react";
import Cards from "./Cards/Cards";
class Medicines extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container" id="medicines">
        <h2>Medicines</h2>
        <p>This is about the Medicines</p>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Cards />
            </div>
            <div class="col-sm">
              <Cards />
            </div>
            <div class="col-sm">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Medicines;
