import React from "react";
import "./SubmitDare.css";

function SubmitDare() {
    return (
        <form>
        <div>
        <label htmlFor="dare_decription">Dare Description:</label>
        <input 
            type="text"
            id="dare_description"
            placeholder="Enter a description of your dare."
        />
        </div>
        <div>
        <label htmlFor="rules">Dare Rules:</label>
        <input
            type="text"
            id="rules"
            placeholder="What are the rules of your dare?"
        />
        </div>
        <button type="submit">
        Submit Dare!
        </button>
        </form>
    );
}

export default SubmitDare