import logo from './logo.svg';
import './App.css';
import DisplayMessage from "./components/DisplayMessage/DisplayMessage.jsx"
import UserInput from "./components/UserInput/UserInput.jsx"
import { useState } from 'react';


const App = () => {
  const [name, setName] = useState("")
  const [favouriteAnimal,setFavouriteAnimal] = useState("")

  const handleNameInput = (e) => {
    const currentInput = e.target.value;
    setName(currentInput)
  }
  
  const getFavouriteAnimal = (e) => {
    const currentInput = e.target.value;
    setFavouriteAnimal(currentInput)
  } 


  return (
    <>
      <h1>Fact finder!</h1>
      <UserInput handleUserInput={handleNameInput} label="Name"/>
      <UserInput handleUserInput={getFavouriteAnimal} label="Favourite Animal"/>
      <DisplayMessage name={name} favoriteAnimal={favouriteAnimal} />
    </>
  );
}

export default App;
