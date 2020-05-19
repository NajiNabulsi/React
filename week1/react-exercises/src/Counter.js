import React, { useState } from 'react'
import Button from "./Button"
import Count from "./Count"
import "./counter.css"

export default function Counter() {
    const [count, setCount] = useState(0);

    const clickHandle = ()=>{
        setCount(count +1)
    }

    const feedback = count > 10 ? <p style={{color : "brown"}}>It's HIGHER THAN 10!</p> : <p>Keep Counting...</p>

    return (
        <div className="counter">
            <Button onClick={clickHandle} />
            <Count count={count} />
            <p><h1>{feedback}</h1></p>
        </div>
    )
}
