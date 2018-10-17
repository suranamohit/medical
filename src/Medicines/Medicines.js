import React, { Component } from "react";
import Cards from "./Cards/Cards";
class Medicines extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container scroll-center section-height" id="medicines">
        <h2>Medicines</h2>
        <p>This is about the Medicines</p>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Cards
                title="medicine 1"
                about="Medicine is the science and practice of the diagnosis, treatment, and prevention of disease"
              />
            </div>
            <div class="col-sm">
              <Cards
                title="medicine 2"
                about="Medicine is the science and practice of the diagnosis, treatment, and prevention of disease"
              />
            </div>
            <div class="col-sm" style={{ padding: "5px;" }}>
              <Cards
                title="medicine 3"
                about="Medicine is the science and practice of the diagnosis, treatment, and prevention of disease"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Medicines;
