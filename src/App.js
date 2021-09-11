import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const didStarted = useSelector(({ game }) => game.isPlaying)

  return (
    <div className="App">
      <GameAria/>
      {
        !didStarted
        &&
        <Form
          titleText={ "Welcome to the" }
          supTitleText={ "\"Whack a mole\"!" }
          btnText={ "Start" }
          text={ "Please choose the difficulty level" }/>
      }
    </div>
  );
}

export default App;
