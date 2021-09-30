import React from "react"

export default function IndividualCheckbox(props) {
    return(
        <div className="indivCheckboxes">
            <label>{props.label}</label>
            <input type="checkbox" ></input>
            <p>{props.text}</p>
            </div>
    )
}