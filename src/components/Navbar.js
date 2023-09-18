import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              News24
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-link active" to="/technology"></Link>
                <Link className="nav-link active" to="/sports">
                  Sports
                </Link>
                <Link className="nav-link active" to="/business">
                  Business
                </Link>
                <Link className="nav-link active" to="/health">
                  Health
                </Link>
                <Link className="nav-link active" to="/science">
                  Science
                </Link>
                <Link className="nav-link active" to="/entertainment">
                  Entertainment
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
