import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import {useState} from "react";

function App() {
    let [started, setStarted] = useState(false)
    let [difficultyLevel, setDifficultyLevel] = useState(null)


    const handleSubmit = (ev) => {
        ev.preventDefault()
        const levels = [
            ev.target[0],
            ev.target[1],
            ev.target[2],
        ]

        levels.forEach(elem => (elem.checked) ? setDifficultyLevel(difficultyLevel = elem.value) : null)
        setStarted(started = true)
    }


    return (
        <div className="App">
            {!started &&
            <Form  cb={handleSubmit} didStarted={started} titleText={"Welcome to the"} supTitleText={"\"Whack" +
            " a mole\"!"} btnText={"Start"}
                   text={"Please choose the difficulty level"}/>}
            { started && <GameAria/>}
        </div>
    );
}

export default App;
