import React from 'react';
import "./_mole.scss"
import "./animation.css"
import MoleSVG from "../Images/MoleSVG";
import { useSelector } from "react-redux";
import { moleSelectors } from "../../Store/mole";
import { CSSTransition, Transition } from "react-transition-group";

const Mole = ({ id }) => {
	const isActive = useSelector(moleSelectors.getActiveMole()) === id
	const moleAnim = state => (<div id={ id } className={ `mole ${ state }` }>
		<MoleSVG/>
	</div>)


	return (
		<CSSTransition
			in={ isActive }
			timeout={ 600 }
			className={ "mole" }
		>
			<div id={ id }>
				<MoleSVG/>
			</div>
		</CSSTransition>
	);
};

export default Mole;