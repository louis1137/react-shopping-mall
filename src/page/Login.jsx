import React from 'react'

const cssFormArea = {
	position : 'absolute',
	top : '300px',
	left : '50%',
	transform : 'translateX(-50%)',
};

const cssForm = {
	padding : '80px 100px',
	border : '1px solid #ffdddd',
	borderRadius : '8px',
};

const cssInput = {
	display : 'block',
	margin : '0 auto 10px',
	padding : '0 10px',
	width : '360px',
	height : '40px',
	border : '1px solid #ddd',
	borderRadius : '8px',
};

const cssButton = {
	display : 'block',
	margin : '0 auto',
	width : '360px',
	height : '60px',
	color : '#666',
	fontSize : '24px',
	border : '1px solid #ddd',
	borderRadius : '8px',
	backgroundColor : '#ddd',
};

const Login = ({cssCommon, isUser, setIsUser, ...props}) => {

	const toggleLogin = (event)=>{
		event.preventDefault();
		setIsUser(!isUser);
	}
	return (
		<>
			<h2 style={cssCommon.h2}>Login</h2>
			<div className="form_area" style={cssFormArea}>
			{

				isUser ? (
					<form action="" style={cssForm} onSubmit={toggleLogin}>
						<button type="submit" style={cssButton}>로그아웃</button>
					</form>
				) : (
					<form action="" style={cssForm} onSubmit={toggleLogin}>
						<input type="text" style={cssInput} placeholder="ID"/>
						<input type="text" style={cssInput} placeholder="PASSWORD"/>
						<button type="submit" style={cssButton}>로그인</button>
					</form>
				)
			}
			</div>
		</>
	)
}

export default Login