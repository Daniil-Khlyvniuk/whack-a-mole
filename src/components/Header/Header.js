import React, { memo } from 'react';
import Lives from "../Lifes/Lifes"

const Header = () => (
	<div>
		<Lives/>
	</div>
);

export default memo(Header);