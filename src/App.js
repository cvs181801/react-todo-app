import React from "react"
import './index.css';
import Checkboxes from './components/Checkboxes';
import todosData from "./components/TodosData";
import IndividualCheckbox from "./components/IndividualCheckbox";


function App() {
  const todoComponents = todosData.map(todo => 
    <IndividualCheckbox key={todo.id} task = {todo.task} 
    requiresConcentration = {todo.requiresConcentration} howOften={todo.howOften}
    />)

    

return (
    <div className="App" >
      <p>To Do's</p>
      <Checkboxes />
     
    </div>
  );
}

export default App;
