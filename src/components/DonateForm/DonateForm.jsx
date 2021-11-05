import React, { useState } from "react";
import "./DonateForm.css";
import { useHistory } from "react-router-dom";

function DonateDollars() {
    const [dollarsData, setDollarsData] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        let { id, value } = e.target;
        setDollarsData((prevDollarsData) => ({
            ...prevDollarsData,
            [id]: value, 
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}dollars/`, 
            {
            method: "post",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(dollarsData),
            }
        );
    }

    return (
        <form>
            <div class="label">
            <label htmlFor="amount">Dollars you'd like to donate:</label>
            <input 
                onChange={handleChange}
                type="number"
                id="amount"
                value={dollarsData.amount}
            />
            </div>
            <div class="label">
            <label htmlFor="comment">Please leave a comment:</label>
            <input 
                onChange={handleChange}
                type="text"
                id="comment"
                placeholder="Enter some words of encouragement"
                value={dollarsData.comment}
            />
            </div>
            <div class="label">
            <label htmlFor="anonymous">Remain Anonymous?</label>
            <input
                onChange={handleChange}
                type="boolean"
                id="anonymous"
                value={dollarsData.anonymous}
            />
            </div>
            <button onClick={handleSubmit} type="submit">
            Submit Dollars!
            </button>
        </form>
    );
}

export default DonateDollars