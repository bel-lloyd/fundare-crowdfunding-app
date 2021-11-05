import React, { useState } from "react";
import "./SubmitDare.css";
import { useHistory } from "react-router-dom";

function SubmitDare() {
    const [dareData, setDareData] = useState({
        is_open: true,
        created_at: new Date(),
        updated_at: new Date()
    });
    const history = useHistory();

    const handleChange = (e) => {
        let { id, value } = e.target;
        setDareData((prevDareData) => ({
            ...prevDareData,
            [id]: value, 
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()

        const dareToSubmit = dareData 
        dareToSubmit.date_for_dare = new Date(dareToSubmit.date_for_dare).toISOString()

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}dares/`, 
            {
            method: "post",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(dareToSubmit),
            }
        );
    }

    return (
        <form>
            <div class="label">
            <label htmlFor="title">Title:</label>
            <input 
                onChange={handleChange}
                type="text"
                id="title"
                placeholder="Give your dare a title."
                value={dareData.title}
            />
            </div>
            <div class="label">
            <label htmlFor="dare_decription">Dare Description:</label>
            <input 
                onChange={handleChange}
                type="text"
                id="dare_description"
                placeholder="Enter a description of your dare."
                value={dareData.dare_description}
            />
            </div>
            <div class="label">
            <label htmlFor="rules">Dare Rules:</label>
            <input
                onChange={handleChange}
                type="text"
                id="rules"
                placeholder="What are the rules of your dare?"
                value={dareData.rules}
            />
            </div>
            <div class="label">
                <label htmlFor="goal">Fundraising Goal?</label>
                <input
                onChange={handleChange}
                type="text"
                id="goal"
                placeholder="How much do you want to raise?"
                value={dareData.goal}
                />
            </div>
            <div class="label">
                <label htmlFor="image">Enter URL for dare image:</label>
                <input
                onChange={handleChange}
                type="url"
                id="image"
                placeholder="Enter URL for image"
                value={dareData.image}
                />
            </div>
            <div class="label">
                <label htmlFor="date_for_dare">What date?</label>
                <input
                onChange={handleChange}
                type="date"
                id="date_for_dare"
                placeholder="When will you complete your dare?"
                value={dareData.date_for_dare}
                />
            </div>
            <div class="label">
                <label htmlFor="for_charity">Which charity will your dare support?</label>
                <input
                onChange={handleChange}
                type="text"
                id="for_charity"
                placeholder="What's the name of the charity you are supporting?"
                value={dareData.for_charity}
                />
            </div>
            <div class="label">
                <label htmlFor="charity_url">URL for charity website?</label>
                <input
                onChange={handleChange}
                type="url"
                id="charity_url"
                placeholder="Enter the URL for your charities website."
                value={dareData.charity_url}
                />
            </div>
            <button onClick={handleSubmit} type="submit">
            Submit Dare!
            </button>
        </form>
    );
}

export default SubmitDare