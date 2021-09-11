import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gamePlay from "./components/GamePlay/GamePlay";


function App() {
  const didStarted = useSelector(({ game }) => game.isPlaying)
  const speed = useSelector(({ game }) => game.gamePlay.speed)
  const MoleIDs = useSelector(({ game }) => game.gamePlay.MoleID)
  const setActiveMole = useDispatch()

  useEffect(() => {
    if (didStarted) gamePlay(setActiveMole, MoleIDs, speed)
  }, [ didStarted,speed,
    MoleIDs,
    setActiveMole ])

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
