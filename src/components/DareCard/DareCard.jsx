import React from "react";
import { Link } from "react-router-dom";
import "./DareCard.css";

function DareCard (props) {
    const { daresData } = props;
    return (
        <div className="dare-card">
        <Link to="/dares">
        <img src={daresData.image }/>
        <h3>{daresData.title}</h3>
        </Link>
        </div>
    );
}

export default DareCard