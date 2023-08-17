import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" >
              <li className="nav-item me-4">
                <Link to={"/newsapp"} style={{ textDecoration: "none", color: "black" }}>
                  <h4>NewsApp</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/otherapimethods"} style={{ textDecoration: "none", color: "black" }}>
                  <h4>OtherApiMethods</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
