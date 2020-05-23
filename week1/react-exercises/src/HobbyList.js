import React from 'react'
import "./hobbyList.css"
function HobbyList({hobbies}) {
    return (
        <ul className="hobbyList">
            <h1>Extreme Hobbies</h1>
            {hobbies.map(hobby =>(
                <li key={hobby}>{hobby}</li>
            ))}
        </ul>
        )
}

export default HobbyList
