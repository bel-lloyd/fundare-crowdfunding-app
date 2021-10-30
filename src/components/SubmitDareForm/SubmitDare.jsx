import React from "react";
import "./SubmitDare.css";

function SubmitDare() {
    return (
        <form>
        <div class="label">
        <label htmlFor="dare_decription">Dare Description:</label>
        <input 
            type="text"
            id="dare_description"
            placeholder="Enter a description of your dare."
        />
        </div>
        <div class="label">
        <label htmlFor="rules">Dare Rules:</label>
        <input
            type="text"
            id="rules"
            placeholder="What are the rules of your dare?"
        />
        </div>
        <div class="label">
            <label htmlFor="goal">Fundraising Goal?</label>
            <input
            type="text"
            id="goal"
            placeholder="How much do you want to raise?"
            />
        </div>
        <div class="label">
            <label htmlFor="image">Upload Photo</label>
            <input
            type="url"
            id="image"
            placeholder="Enter URL for image"
            />
        </div>
        <div class="label">
            <label htmlFor="date_for_dare">What date?</label>
            <input
            type="url"
            id="date_for_dare"
            placeholder="When will you complete your dare?"
            />
        </div>
        <button type="submit">
        Submit Dare!
        </button>
        </form>
    );
}

export default SubmitDare