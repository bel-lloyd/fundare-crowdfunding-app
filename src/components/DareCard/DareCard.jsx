import React from "react";
import { Link } from "react-router-dom";
import "./DareCard.css";

function DareCard (props) {
    const { dareData } = props;
    return (
        <div className="dare-card">
        <Link to="/dares">
        <img src={dareData.image}/>
        <h3>{dareData.title}</h3>
        </Link>
        </div>
    );
}

export default DareCard