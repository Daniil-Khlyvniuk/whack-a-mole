import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gamePlay from "./components/GamePlay/GamePlay";


function App() {
  const didStarted = useSelector(({ game }) => game.isPlaying)
  const lives = useSelector(({ game }) => game.gamePlay.lives)

  const speed = useSelector(({ game }) => game.gamePlay.speed)
  const MoleIDs = useSelector(({ game }) => game.gamePlay.MoleID)
  const setActiveMole = useDispatch()
  // const gamePlay1 = gamePlay.bind(null, [setActiveMole, MoleIDs, speed])
  let timer
  useEffect(() => {
    if (didStarted) {
      let timer = setInterval(() => gamePlay(setActiveMole, MoleIDs, speed), 1400)
    }
    if (lives < 1) clearInterval(timer)
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
      {
        lives < 1
        &&
        <Form
          titleText={ "Game over" }
          supTitleText={ "" }
          btnText={ "retry" }
          text={ "Please choose the difficulty level" }/>
      }
    </div>
  );
}

export default App;
