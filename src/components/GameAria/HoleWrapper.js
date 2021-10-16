import React, { memo } from 'react';
import "./_gameAria.scss"
import Mole from "../Mole/Mole";
import Goal from "../Goal/Goal";


const HoleWrapper = ({ id }) =>  (
		<div className={ "hole-wrapper" }>
			<Mole id={ id }/>
			<Goal id={ id }/>

			<div className={ "hole" }/>
			<div className={ "overlap" }/>
			<div className={ "overlap_1" }/>
		</div>
	);

export default memo(HoleWrapper);