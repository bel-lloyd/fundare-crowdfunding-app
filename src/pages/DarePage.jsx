import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const DarePage = () => {
    const [dareData, setDareData] = useState({dollars: [] });
    const [isEditing, setIsEditing] = useState(false);
    const { id: dare_id } = useParams();
    console.log (dare_id)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}dares/${dare_id}/`)
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

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`
        ${process.env.REACT_APP_API_URL}dares/${dare_id}/`, 
        {
        method: "put",
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            id: dareData.id,
            title: dareData.title,
            rules: dareData.rules,
            dare_description: dareData.dare_description,
            image: dareData.image,
            is_open: dareData.is_open,
            goal: dareData.goal,
            created_at: dareData.created_at,
            updated_at: dareData.updated_at,
            date_for_dare: dareData.date_for_dare,
            for_charity: dareData.for_charity,
            charity_url: dareData.charity_url,
            owner: dareData.owner
        }
        ),
    }
    );

    setIsEditing(false)
}

    const deleteDare = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}dares/${dare_id}`, {
            method: "delete",
            headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
            }
        })
        // Once we delete the project above, we then want to navigate back to the homepage
        // since the project we are looking at, doesn't exist anymore
        history.push('/')
    }

    const formattedDate = new Date(dareData?.created_at).toDateString()
    
    const ReadDare = () => {
        return (
            <div className="dare-info">
                <div className="dare">
                    <h2>{`${dareData.title}`}</h2>
                    <h2>{`to support ${dareData.for_charity}`}</h2>
                    <h3>What's the dare? </h3>
                    <p>{dareData.dare_description}</p>
                    <h3>Who's the dare care for?</h3>
                    <p>{dareData.for_charity}</p>
                    <h3>Check them out here.</h3>
                    <a href={dareData.charity_url}>{dareData.for_charity}</a>
                    <h3>Ok cool! What are the rules?</h3>
                    <p>{dareData.rules}</p>
                    <h3>Date for dare:</h3>
                    <p>{formattedDate}</p>
                    <h3>Dare still on?</h3>
                    <p>{`It is ${dareData.is_open} that this dare is still on.`}</p>
                    <h3>Dollars for Dare: </h3>
                    <ul>
                        {dareData.dollars.map((dollarsData, key) => {
                            return(
                                <li key={key}>
                                    ${dollarsData.amount} donated kindly by     
                                    {dollarsData.supporter} who wants to say
                                    "{dollarsData.comment}"
                                </li>
                                );
                        })}
                    </ul>
                </div>
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
                {
                    localStorage.getItem('token')
                    && <button onClick={deleteDare}>Delete This Dare</button>
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
