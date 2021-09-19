import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamePlaySelectors } from "./Store/gamePlay";
import { moleActions } from "./Store/mole";
import getRandomActiveMole from "./components/getRandomActiveMole/getRandomActiveMole";


function App() {
  const didStarted = useSelector(gamePlaySelectors.getIsPlaying())
  const lives = useSelector(gamePlaySelectors.getLives())
  const dispatch = useDispatch();

  useEffect(() => {
    if (!didStarted) return

    setInterval(() => {
      dispatch(moleActions.setActiveMole(getRandomActiveMole()))
    }, 2000)

  }, [ didStarted ])

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
