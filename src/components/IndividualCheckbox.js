import React from "react"

export default function IndividualCheckbox(props) {
    return(
        <div className="indivCheckboxes">
            <label>{props.label}</label>
            <input type="checkbox" ></input>
            <p style={{ color: 'purple'}}>{props.text}</p>
            </div>
    )
}