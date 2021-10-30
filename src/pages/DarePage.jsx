import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DarePage = () => {
    const [dareData, setDareData] = useState({dollars: [] });
    const [isEditing, setIsEditing] = useState(false);
    const { id: dare_id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}dares/${dare_id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setDareData(data);
        });
        
    }, [dare_id]);
    
    const handleChange = (event) => {
        const { id, value } = event.target
        setDareData({
            ...dareData,
            [id]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`
        ${process.env.REACT_APP_API_URL}dares/${dare_id}`, 
        {
        method: "put",
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            title: dareData.title,
            rules: dareData.rules,
            dare_description: dareData.dare_description,
            image: dareData.image,
            is_open: dareData.is_open
        }
        ),
    }
    );

    setIsEditing(false)
}

    const ReadDare = () => {
        return (
            <div className="dare">
                <h1>{dareData.title}</h1>
                <img src={dareData.image}/>
                <h3>{`What's the dare: ${dareData.description}`}</h3>
                <h4>{`Who's the dare care for: ${dareData.for_charity}`}</h4>
                <a href={dareData.charity_url}>{dareData.for_charity}</a>
                <h3>Ok cool! What are the rules?</h3>
                <p>{dareData.rules}</p>
                <h3>Date for dare: {dareData.created_at}</h3>
                <h3>{`Status: ${dareData.is_open}`}</h3>
                <h3>Dollars for Dare:</h3>
                <ul>
                    {dareData.dollars.map((dollarsData, key) => {
                        return(
                            <li key={key}>
                                {dollarsData.amount} from
                                {dollarsData.supporter}
                            </li>
                            );
                    })}
                </ul>
            </div>
        )
    }

    return (
        <div class="dare-page">
            <h2>{dareData.title} to support {dareData.for_charity}</h2>
            <img src={dareData.image }/>
            { 
                localStorage.getItem("token") 
                && isEditing == false
                && <button onClick={() => setIsEditing(true)}>Edit This Dare</button> 
                }
                <div>
                    {
                        isEditing
                        ? (
                            <form onSubmit={handleSubmit}>
                                <div>   
                                    <label htmlFor="title">What's the dare title?</label>
                                    <input
                                        value={dareData.title}
                                        type="text"
                                        id="title"
                                        placeholder="Title"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="rules">What are the rules?</label>
                                    <input
                                        value={dareData.rules}
                                        type="text"
                                        id="rules"
                                        placeholder="Rules"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dare_description">Please describe the dare:</label>
                                    <input
                                        value={dareData.dare_description}
                                        type="text"
                                        id="dare_description"
                                        placeholder="Rules"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="is_open">Dare still on?</label>
                                    <input
                                        value={dareData.is_open}
                                        type="text"
                                        id="is_open"
                                        placeholder="Dare live?"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="image">Enter Dare image URL</label>
                                    <input
                                        value={dareData.image}
                                        type="url"
                                        id="image"
                                        placeholder="Image"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit">Update Dare</button>
                            </form>        
                            )
                            : <ReadDare />
                        }
            </div>
        </div>
    );
}

export default DarePage
