import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav nav-tabs">
      <NavLink to="/" activeClassName="active"><li className="nav-link">Home</li></NavLink>
      <NavLink to="/users" activeClassName="active"><li className="nav-link">Users</li></NavLink>
      <NavLink to="/create" activeClassName="active"><li className="nav-link">Create A User</li></NavLink>
      <NavLink to="/topranked" activeClassName="active"><li className="nav-link">Top Ranked ()</li></NavLink>
    </ul>
  )
}

export default Navbar;
