import React from 'react'
import logo from "../Images/logo1.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <nav className=' navbar navbar-expand-lg navbar-light bg-light px-5'>
          <span className="navbar-toggler-icon mx-2 ml-5"></span>

          <Link to="/portal/home" className="navbar-brand">
            <img src={logo} alt="" width="160px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-4 active">
                <Link to="/portal/about" className="nav-link">
                  About <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li lassName="nav-item mr-4">
                <Link to="/portal/home" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="/portal/questions" className="nav-link">
                  Questions
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="/portal/jobs" className="nav-link">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portal/team" className="nav-link">
                  For Team
                </Link>
              </li>
            </ul>
            <form className="form-inline mx-2 my-lg-0 mr-5">
              <span className="fas fa-search search"></span>
              <input
                type="text"
                className="form-control pr-5 pl-4 searchInput"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search..."
              />
              <Link to="/" className="nav-link">
                <button
                  className="btn btn-outline-primary my-sm-0 btn-sm px-3"
                  type="submit"
                  style={{ backgroundColor: "#e3f2fd", color: "gray" }}
                >
                  Log in
                </button>
              </Link>

              <Link to="/" className="nav-link">
                <button
                  className="btn btn-primary my-sm-0 btn-sm px-3"
                  type="submit"
                >

                  Logout
                </button>
              </Link>

            </form>
          </div>
        </nav>
    </>
  )
}

export default NavBar