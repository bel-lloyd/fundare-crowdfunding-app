import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {

    return (
        <div>
        <nav>
        <Link to="/submitdare">Do a dare</Link>
        <Link to="/">Home</Link> 
        <Link to="/dares">Fund a dare</Link>
        <Link to="/authenticate">Register/Login</Link>
        </nav>
        </div>
    );
}

export default Nav;