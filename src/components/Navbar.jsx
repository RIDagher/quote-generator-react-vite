import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </>
  );
};

export default Navbar;
