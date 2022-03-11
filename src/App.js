import logo from './logo.svg';
import './App.css';
import DisplayMessage from "./components/DisplayMessage/DisplayMessage.jsx"
import UserInput from "./components/UserInput/UserInput.jsx"
import { useState } from 'react';

const App = () => {
  //Declare state of the our userName here 

  //Write a function to handle the the onChnage in the user input and pass it down as props. 

  return (
    <>
      <h1>Fact finder!</h1>
      <UserInput label="Name" classNames ="user-input--highlight"/>
      <h2>Hello: {/* Show new userName here */}</h2>
    </>
  );
}

export default App;
