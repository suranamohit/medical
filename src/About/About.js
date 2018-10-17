import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="about" class="scroll-center container section-height">
        <h3>About us</h3>
        <p>
          Medical science has come a long way from tribal shaman dispensing
          herbs and roots. Having already cured many diseases and conditions
          that were once a death sentence, medical researchers continue to
          strive to help us live longer and healthier lives. Great advances are
          being made in regrowing damaged organs, turning back our biological
          clocks, and the big one – finding a cure for cancer.
        </p>
      </div>
    );
  }
}

export default About;
