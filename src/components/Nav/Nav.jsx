import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    const token = window.localStorage.getItem('token')

    return (
        <nav>
        <Link to="/">Home</Link>  
        </nav>
    );
}

export default Nav;