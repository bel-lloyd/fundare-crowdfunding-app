import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DarePage() {
    const [dareData, setDareData] = useState({ dollars: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}dares/${id}`)
        .then((results) => {
        return results .json();
        })
        .then((data) => {
        setDareData(data);
        });
    },  []);

    return (
    <div>
    <h2>{dareDare.title}</h2>
    <h3>Created at: {dareDare.date_created}</h3>
    <h3>{`Status: ${dareDare.is_open}`}</h3>
    <h3>Dollars:</h3>
    <ul>
    {dareDare.dollars.map((dollarsData, key) => {
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