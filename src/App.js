import logo from './logo.svg';
import './App.css';
import DisplayMessage from "./components/DisplayMessage/DisplayMessage.jsx"
import UserInput from "./components/UserInput/UserInput.jsx"
import { useState } from 'react';


const App = () => {
  const [name, setName] = useState("")

  const handleNameInput = (e) => {
    const currentInput = e.target.value;
    setName(currentInput)
  }


  return (
    <>
      <h1>Fact finder!</h1>
      <UserInput handleUserInput={handleNameInput} label="Name"/>
      {
      // Add the userInput component again here to get the favourite animal 

      //Take a look at the DisplayMessage component, use this component to to now render the message to the screen using the onChange values from both of the userInputs 

      }
    </>
  );
}

export default App;
