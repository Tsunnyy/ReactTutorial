import React, { useState } from 'react'

export default function Textarea(props) {
    // Uppercase on Button click 
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    // lowerCase on Button click 
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    // ClearAll Text
    const ClearAll = () => {
        let newText = text.Clear();
        setText(newText)
    }

    // Onchange TextBox 
    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");
    // text = "Hello" Worng way 
    // setText("Hello") Right way 
    return (
        <div className="container my-3">
            <div className="form-group">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" value={text} onChange={handleOnchange} rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-3" onClick={upperCase} >Convert To Uppercase</button>
            <button type="button" className="btn btn-warning" onClick={lowerCase} >Convert To Lowercase</button>
            <button type="button" className="btn btn-danger mx-3" onClick={ClearAll} >Delete</button>
        </div>
    )
}
