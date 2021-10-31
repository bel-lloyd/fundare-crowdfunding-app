import React from "react";
import { Link } from "react-router-dom";
import "./DareCard.css";

function DareCard (props) {
    const { daresData } = props;
    return (
        <div className="dare-card">
            <Link to={`/dares/${daresData.id}`}>
                <div class="card">
                    <img src={daresData.image }/>
                    <div class="centered">{daresData.title}</div>
                </div>
            </Link>
        </div>
    );
}

export default DareCard