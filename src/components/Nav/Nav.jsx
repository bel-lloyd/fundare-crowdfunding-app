import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {

    return (
        <div>
        <nav>
        <Link to="/">Home</Link> 
        <Link to="/submitdare">Submit</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/authenticate">Login</Link>
        </nav>
        </div>
    );
}

export default Nav;