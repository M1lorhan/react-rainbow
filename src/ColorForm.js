import React, { useState } from "react";

function ColorForm(props){
    let [input, setInput] = useState ('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
        e.target.reset();
        };


        return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue="Enter Color"
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm