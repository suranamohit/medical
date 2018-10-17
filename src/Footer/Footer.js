import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer
        class="bg-dark page-footer scroll-center section-height"
        id="footer"
      >
        <div class="container text-light text-center text-md-left">
          <div class="row">
            <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">
                Footer Content
              </h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <a href="#!">About Us</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">Medicines</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">Carrier</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">Brand</a>
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i class="fa fa-home mr-3" /> New York, NY 10012, US
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa fa-envelope mr-3" /> info@example.com
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa fa-phone mr-3" /> + 01 234 567 88
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa fa-print mr-3" /> + 01 234 567 89
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
              <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

              <a type="button" class="btn-floating btn-fb">
                <i class="fa fa-facebook" />
              </a>

              <a type="button" class="btn-floating btn-tw">
                <i class="fa fa-twitter" />
              </a>

              <a type="button" class="btn-floating btn-gplus">
                <i class="fa fa-google-plus" />
              </a>

              <a type="button" class="btn-floating btn-dribbble">
                <i class="fa fa-dribbble" />
              </a>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="http://atomtray.com"> Atomtray.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
