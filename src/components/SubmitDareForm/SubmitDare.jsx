import React from "react";
import "./SubmitDare.css";

function SubmitDare() {
    return (
        <form>
            <div class="label">
            <label htmlFor="title">Title:</label>
            <input 
                type="text"
                id="title"
                placeholder="Give your dare a title."
            />
            </div>
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
                <label htmlFor="image">Enter URL for dare image:</label>
                <input
                type="url"
                id="image"
                placeholder="Enter URL for image"
                />
            </div>
            <div class="label">
                <label htmlFor="date_for_dare">What date?</label>
                <input
                type="text"
                id="date_for_dare"
                placeholder="When will you complete your dare?"
                />
            </div>
            <div class="label">
                <label htmlFor="for_charity">Which charity will your dare support?</label>
                <input
                type="text"
                id="for_charity"
                placeholder="What's the name of the charity you are supporting?"
                />
            </div>
            <div class="label">
                <label htmlFor="charity_url">URL for charity website?</label>
                <input
                type="url"
                id="charity_url"
                placeholder="Enter the URL for your charities website."
                />
            </div>
            <button type="submit">
            Submit Dare!
            </button>
        </form>
    );
}

export default SubmitDare