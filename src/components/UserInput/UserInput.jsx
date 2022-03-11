
import { useState } from "react";
import "./UserInput.scss"
const UserInput = () => {
//1.How can we make this component reusable so that it isn't just an input with the label of name

//2. We can pass down attributes as props too, how could we pass down the prop of user-input--highlight to this component? 
    return (
    <>
        <form>
            <label htmlFor="user-input">Name: </label>
            <input id="user-input--highlight"/>
        </form>
    </>
      );
}
 
export default UserInput;