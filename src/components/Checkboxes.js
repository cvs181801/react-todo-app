import React from 'react'
import IndividualCheckbox from "./IndividualCheckbox"
import TodosData from './TodosData'


function App() {
    const todoComponents = todosData.map(todo => 
      <IndividualCheckbox key={todo.id} task = {todo.task} 
      requiresConcentration = {todo.requiresConcentration} howOften={todo.howOften}
      />)
  
     //<label>{props.label}</label>

export default function Checkbox() {
    return (
        <div className="ToDos-Div">
           {/* < IndividualCheckbox 
                // label="laundry"
                // text="Awesome"  
                />
           < IndividualCheckbox 
                // label="Study React"
                // text="I rock!"
                />
           < IndividualCheckbox 
                // label="Sweep Floor"
                // text="Excellent"
                />
           < IndividualCheckbox 
                // label="Check Email"
                // text="Super!"
                />
           < IndividualCheckbox 
                // label="Glue Insoles"
                // text="Keep It Up"
                /> */}

              {todoComponents}  
        </div>
    )
}
 
  

