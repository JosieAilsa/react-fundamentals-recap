import logo from './logo.svg';
import './App.css';
import DisplayMessage from "./components/DisplayMessage/DisplayMessage.jsx"
import UserInput from "./components/UserInput/UserInput.jsx"

const App = () => {
  return (
    <>
      <h1>Fact finder!</h1>
      <UserInput/>
    </>
  );
}

export default App;
