import React, { memo, useMemo } from "react"
import { useSelector } from "react-redux"
import { TransitionGroup } from "react-transition-group"
import UseTypeOfScreen from "../../customHooks/useTypeOfScreen"
import { gamePlaySelectors } from "../../Store/gamePlay"
import Hummer from "../Hummer/Hummer"
import Lives from "../Lifes/Lifes"
import Score from "../Score/Score"
import "./gameAria.css"
import HoleWrapper from "./HoleWrapper"


const GameAria = () => {
	const didStart = useSelector(gamePlaySelectors.getIsPlaying())
	const { isMobile } = UseTypeOfScreen()


	const holes = useMemo(() => ([ ...Array(15) ].map((e, i) =>
		[ 0, 4, 10, 14 ].includes(i)
			?
			<div key={ i } />
			:
			<HoleWrapper key={ i } id={ i } />
	)), [])


	return (
		<div
			style={ { ...(didStart && !isMobile && { cursor: "none" }) } }
			id={ "game-aria" }
		>
			<Lives />
			<Score />
			<TransitionGroup id={ "hole-field" }>
				{ holes }
			</TransitionGroup>
			{
				!isMobile
				&&
				<Hummer />
			}
		</div>
	)
}


export default memo(GameAria)