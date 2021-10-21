import React from "react";
import { allDares } from "../data";
import DareCard from "../components/DareCard/DareCard";

function HomePage() {
    return (
    <div id="dares-list">
    {allDares.map((DareData, key) => {
    return <DareCard key={key} DareData={DareData} />;
    })}
    </div>
    );
}

export default HomePage