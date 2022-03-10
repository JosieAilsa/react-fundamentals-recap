
import { useState } from "react";
import "./UserInput.scss"
const UserInput = ({ handleUserInput, label}) => {

    return (
    <>
        <form>
            <label htmlFor="userInput">{label}: </label>
            <input onChange={handleUserInput} id="useInput"/>
        </form>
    </>
      );
}
 
export default UserInput;