import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import {useState} from "react";

function App() {
    let [started, setStarted] = useState(false)
    let [difficultyLevel, setDifficultyLevel] = useState(null)
    let [activeIndex, setactiveIndex] = useState(null)

    // const [moles, setMole] = useState(document.querySelectorAll(".mole"))
    // const [goals, setGoal] = useState(document.querySelectorAll(".goal"))
    // const moles = null
    // const goals = null

    // let activeMole = moles[randomIndex]

    const handleSubmit = (ev) => {
        ev.preventDefault()


        const levels = [
            ev.target[0],
            ev.target[1],
            ev.target[2],
        ]
        levels.forEach(elem => (elem.checked) ? setDifficultyLevel(difficultyLevel = elem.value) : null)
        setStarted(started = true)
        Gameplay()
    }

    const Gameplay = () => {
        let moles = document.querySelectorAll(".mole")
        let goals = document.querySelectorAll(".goal")
        let randomIndex = Math.floor(Math.random() * 12)
        let activeMole

        console.log(moles);
        console.log(goals);
        console.log(activeMole);

        let timer = setTimeout(function run(){
            if (document.getElementByTagName("active")) document.getElementByTagName("active").classlist.remove("active")
            activeMole = moles[randomIndex]
            activeMole.classList.add("active")
            timer = setTimeout(run, 1000)
        }, 1000)
    }

    return (
        <div className="App">
            <GameAria  />
            {!started &&
            <Form  cb={handleSubmit} didStarted={started} titleText={"Welcome to the"} supTitleText={"\"Whack" +
            " a mole\"!"} btnText={"Start"}
                   text={"Please choose the difficulty level"}/>
            }
        </div>
    );
}

export default App;
