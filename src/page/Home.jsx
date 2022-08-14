import React from 'react';

import {Link} from 'react-router-dom';

const Home = ({cssCommon, ...props}) => {
	return (
		<>
			<h2 style={cssCommon.h2}>Home</h2>
		</>
	)
}

export default Home