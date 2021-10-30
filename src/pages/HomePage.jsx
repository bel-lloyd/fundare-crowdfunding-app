import React, { useState, useEffect } from "react";
import { allDares } from "../data";
import DareCard from "../components/DareCard/DareCard";

function HomePage() {
    const [dareList, setDareList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}dares`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setDareList(data);
        });
    },[]);

    return (
    <div id="dares-list">
    {dareList.map((DareData, key) => {
    return <DareCard key={key} daresData={DareData} />;
    })}
    <h2>Funded by Fundare</h2>
    </div>
    );
}

export default HomePage