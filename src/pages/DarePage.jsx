import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DarePage() {
    const [dareData, setDareData] = useState({ dollars: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}dares/${id}`)
            .then((results) => {
            console.log("results", results);
            return results.json();
            })
            .then((data) => {
                console.log("data", data);
                setDareData(data);
            });
    },  []);

    return (
        <div>
            <h2>{dareData.title}</h2>
            <h3>What's the dare?</h3>
            <p>{dareData.dare_description}</p>
            <h3> Who does the dare care for?</h3>
            <p>{dareData.for_charity}</p>
            <h3>Ok cool! What are the rules?</h3>
            <p>{dareData.rules}</p>
            <h3>Date for dare: {dareData.created_at}</h3>
            <h3>{`Status: ${dareData.is_open}`}</h3>
            <h3>Dollars:</h3>
            <ul>
            {dareData.dollars.map((dollarsData, key) => {
        return (
        <li>
        ${dollarsData.goal} from {dollarsData.supporter} supporters
        </li>
        )
    })}
    </ul>
    </div>
    );
}

export default DarePage;