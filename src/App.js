import React from "react"
import './index.css';
import Checkboxes from './components/Checkboxes';
//import TodosData from './components/TodosData';

function App() {

    // const todoComponents = TodosData.map(todo => 
    //    key={todo.id} task={todo.task} 
    //   requiresConcentration={todo.requiresConcentration} howOften={todo.howOften}
    //   )
  
return (
    <div  >
      <Checkboxes/>
      
    </div>
  );
}

export default App;
// {todoComponents} 
