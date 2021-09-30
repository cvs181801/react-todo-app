import React from 'react'
import IndividualCheckbox from "./IndividualCheckbox"

export default function Checkbox() {
    return (
        <div className="ToDos-Div">
           < IndividualCheckbox 
                label="laundry"
                text="Awesome"  
                />
           < IndividualCheckbox 
                label="Study React"
                text="I rock!"
                />
           < IndividualCheckbox 
                label="Sweep Floor"
                text="Excellent"
                />
           < IndividualCheckbox 
                label="Check Email"
                text="Super!"
                />
           < IndividualCheckbox 
                label="Glue Insoles"
                text="Keep It Up"
                />
        </div>
    )
}

