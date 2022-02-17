import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "./Store/gamePlay";
import { moleSelectors } from "./Store/mole";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useMoleAnimationController from "./customHooks/useMoleAnimationController";
import useGameOver from "./customHooks/useGameOver";

function App() {
	const [ isOpen, setIsOpen ] = useState(false)
	const didStarted = useSelector(gamePlaySelectors.getIsPlaying())
	const updateTrigger = useSelector(moleSelectors.getUpdateTrigger())
	const activeMole = useSelector(moleSelectors.getActiveMole())
	const { startAnimation, stopAnimation, speedUp } = useMoleAnimationController()
	const { backToInitState } = useGameOver()
	const lives = useSelector(gamePlaySelectors.getLives())
	const diffLvl = useSelector(gamePlaySelectors.getDifficultyLevel())

	const handleClick = () => {
		setIsOpen(false)
	}


	useEffect(() => {
		setTimeout(() => {
			setIsOpen(!didStarted)
		}, 500)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ didStarted ])

	useEffect(() => {
		if (!didStarted) return
		startAnimation()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ didStarted, activeMole, updateTrigger ])

	useEffect(() => {
		if (!didStarted) return
		speedUp(diffLvl)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ didStarted, activeMole, updateTrigger, diffLvl ])

	useEffect(() => {
		if (lives < 1) {
			stopAnimation()
			backToInitState()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ lives ])

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
