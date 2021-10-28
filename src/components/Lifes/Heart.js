import React, { memo } from 'react';
import { CSSTransition } from "react-transition-group";
import "./lifes.css"


const Heart = () => (
	<CSSTransition
		timeout={ 500 }
		classNames={"heart"}
	>
		<div/>
	</CSSTransition>
)

export default memo(Heart);