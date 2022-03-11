
import { useState } from "react";
import "./UserInput.scss"
const UserInput = ({classNames, label}) => {
//How can we set the state so the user name changes in the h2 underneath?
    return (
    <>
        <form>
            <label htmlFor="user-input">{label}: </label>
            <input className={`user-input ${classNames}`}/>
        </form>
        <h2>{/* Show userName here*/}</h2>
    </>
      );
}
 
export default UserInput;