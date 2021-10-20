import React from "react";
import { oneDare } from "../data";

function DarePage() {
    return (
    <div>
    <h2>{oneDare.title}</h2>
    <h3>Created at: {oneDare.date_created}</h3>
    <h3>{`Status: ${oneDare.is_open}`}</h3>
    <h3>Dollars:</h3>
    <ul>
    {oneDare.dollars.map((dollarsData, key) => {
        return (
        <li>
        ${dollarsData.amount} from {dollarsData.supporter} supporters
        </li>
        );
    })}
    </ul>
    </div>
    );
}

export default DarePage;