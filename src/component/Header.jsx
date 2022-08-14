import React from 'react'
import { Link } from 'react-router-dom'

const cssHeader = {
	height : '80px',
	borderBottom : '1px solid #ddd',
}

const cssH1 = {
	position : 'absolute',
	top : '0',
	left : '40px',
	color : '#f66',
	fontSize : '48px',
	fontWeight : '700',
	lineHeight : '80px'
}

const cssInner = {
	display : 'flex',
	justifyContent : 'flex-end',
}

const cssNav = {
	lineHeight : '80px'
}

const cssLink = {
	margin : '0 30px',
	color : '#999',
	fontSize : '24px',
	cursor : 'pointer',
}

const Header = ({cssCommon, ...props}) => {
	return (
		<>
			<header style={cssHeader}>
				<div className="inner" style={{...cssCommon.inner, ...cssInner}}>
					<h1 style={cssH1}>LOGO</h1>
					<nav style={cssNav}>
						<Link to="/" style={cssLink}>HOME</Link>
						<Link to="/product" style={cssLink}>PRODUCT</Link>
						<Link to="/login" style={cssLink}>LOGIN</Link>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header