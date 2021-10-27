import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamePlayActions, gamePlaySelectors } from "./Store/gamePlay";
import { moleActions, moleSelectors } from "./Store/mole";
import { CSSTransition, Transition, TransitionGroup } from "react-transition-group";
import useMoleAnimationController from "./customHooks/useMoleAnimationController";
import UseGameOver from "./customHooks/useGameOver";
import Hummer from "./components/Hummer/Hummer";

function App() {
	const [ isOpen, setIsOpen ] = useState(false)
	const didStarted = useSelector(gamePlaySelectors.getIsPlaying())
	const updateTrigger = useSelector(moleSelectors.getUpdateTrigger())
	const activeMole = useSelector(moleSelectors.getActiveMole())
	const dispatch = useDispatch()
	const { startAnimation, stopAnimation } = useMoleAnimationController()
	const lives = useSelector(gamePlaySelectors.getLives())
	const { backToInitState } = UseGameOver()

	const handleClick = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		if (lives < 1) {
			stopAnimation()
			// dispatch(gamePlayActions.setIsPlaying(false))
			backToInitState()
		}
	}, [ lives ])

	useEffect(() => {
		setTimeout(() => {
			setIsOpen(!didStarted)
		}, 500)
	}, [ didStarted ])

	useEffect(() => {
		if (!didStarted) return
		startAnimation()
	}, [ didStarted, activeMole, updateTrigger ])


	return (
		<div className="App">
			<GameAria/>
			<TransitionGroup component={ null }>
				{
					isOpen &&
					<CSSTransition
						timeout={ {
							appear: 500,
							enter: 300,
							exit: 1000,
						} }
						in={ isOpen }
						appear
						mountOnEnter
						unmountOnExit
						classNames={ "formWrapper" }
					>
						<Form
							didStarted={ isOpen }
							titleText={ "Welcome to the" }
							supTitleText={ "\"Whack a mole\"!" }
							btnText={ "Start" }
							text={ "Please choose the difficulty level" }
							cb={ handleClick }
						/>
					</CSSTransition>
				}
			</TransitionGroup>

		</div>
	)
}

export default App;
