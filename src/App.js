import React from "react"
import './index.css';
import Checkboxes from './components/Checkboxes';
import IndividualCheckboxes from "./components/IndividualCheckboxes";


function App() {
//const [toDos , setToDos] = useState([Todo1, Todo2]) //the useState() method is a hook that allows you to add state variables into functional components.  The first parameter is the current state and the second is the state you want to update it to.
  

return (
    <div className="App" >
      {/*<Checkboxes toDos = {todos}/>*/}
      <p>To Do's</p>
      <Checkboxes />
     
    </div>
  );
}

export default App;
