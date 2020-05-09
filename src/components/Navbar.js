import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/search" className="navbar-brand">
        Search
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/list" className="nav-link">
              List
            </Link>
            
          </li>
          <li className="navbar-item">
          <Link to="/count" className="nav-link">
              Count
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
