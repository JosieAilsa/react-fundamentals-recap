import { useState } from "react";
import "./UserInput.scss"
const UserInput = ({classNames, label}) => {

    return (
        <form>
            <label htmlFor="user-input">{label}: </label>
            <input className={`user-input ${classNames}`} onChange = {() => {/*Add a new onChange function here*/}}/>
        </form>
      );
}
 
export default UserInput;