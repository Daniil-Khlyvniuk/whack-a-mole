import logo from './logo.svg';
import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import {useState} from "react";

function App() {
    // let [didStarted, setDidStarted] = useState()
    let didStarted = true
  return (
    <div className="App">
        {!didStarted &&
            <Form didStarted={didStarted} titleText={"Welcome to the"} supTitleText={"\"Whack a mole\"!"} btnText={"Start"}
               text={"Please choose the difficulty level"}/>}
        { didStarted && <GameAria/>}
    </div>
  );
}

export default App;
