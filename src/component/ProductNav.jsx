import React from 'react'

const ProductNav = () => {

	const category = ['신상품', '남자', '여자'];

	const cssNav = {
		position : 'relative',
		textAlign : 'center',
	}

	const themeColor = '#ff9999'

	const cssLi = {
		display : 'inline-block',
		margin : '0 20px',
		padding : '4px 8px',
		color : themeColor,
		fontSize : '18px',
		fontWeight : '700',
		cursor : 'pointer',
		border : '2px solid '+themeColor,
		borderRadius : '6px',
	}

	const cssSearchBox = {
		position : 'absolute',
		top : 0,
		right : 0
	}

	const cssInput = {
		padding : '0 10px',
		width : '180px',
		height : '40px',
		borderBottom : '2px solid '+themeColor,
		color : themeColor,
	}

	const cssButton = {
		marginLeft : '6px',
		padding : '4px 8px',
		border : '2px solid '+themeColor,
		color : themeColor,
		borderRadius : '6px',
	}
	
	return (
		<>
			<nav style={cssNav}>
				<ul>
					{
						category.map((categoryName,index) => <li key={index} style={cssLi}>{categoryName}</li>)
					}
				</ul>
				<div className="searchBox" style={cssSearchBox}>
					<input type="text" style={cssInput}/>
					<button type='button' style={cssButton}>검색</button>
				</div>
			</nav>
		</>
	)
}

export default ProductNav