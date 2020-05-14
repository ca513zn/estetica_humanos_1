import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/store">Store</Link>
      </div>
      <div>
        <Link to="/hairstyles">Hairstyles</Link>
      </div>
      <div>
        <Link to="/reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default NavBar;
