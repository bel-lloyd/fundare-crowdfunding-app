import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/dares">Dares</Link>
        </nav>
    );
}

export default Nav;