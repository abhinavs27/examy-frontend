import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg " >
        <Link to="/" className="nav-brand font-weight-bold ml-4" >
          EXAMY
        </Link>

        <div className=" navbar-collapse mr-4 responsiveNav">
          <ul className="navbar-nav ml-auto" id="nav">
            <li className="nav-item font-weight-bold" >
              <Link to="#" className="nav-link homeNav" >
                Home
              </Link>
            </li>

            <li className="nav-item font-weight-bold">
              <Link to="#" className="nav-link">
                LogOut
              </Link>
            </li>

          </ul>
        </div>
        <div>
        </div>
      </nav>
    );
  }
}
