import React, { Component } from "react";
import "./Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card box" style={{ width: "300px" }}>
        <img
          class="card-img-top"
          src="https://images.theconversation.com/files/101120/original/image-20151106-16242-12xhw43.jpg?ixlib=rb-1.1.0&rect=40%2C851%2C5398%2C2621&q=45&auto=format&w=1356&h=668&fit=crop"
          alt="Card image cap"
        />

        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Cards;
