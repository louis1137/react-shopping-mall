import React from 'react'
import { useNavigate } from 'react-router-dom'

const cssLi = {
	position : 'relative',
	float : 'left',
	margin : '1%',
	width : '23%',
	border : '1px solid #ddd',
	pointer : 'cursor',
}

const cssNew = {
	position : 'absolute',
	top : '10px',
	right : '10px',
	width : '60px',
	lineHeight : '60px',
	color : 'white',
	fontSize : '16px',
	textAlign : 'center',
	backgroundColor : 'red',
	borderRadius : '50%',
}

const cssImage = {
	display : 'block',
	width : '100%'
}

const cssInfo = {
	padding : '10px 20px'
}

const cssTitle = {
	display : 'block',
	color : '#999999',
	fontSize : '16px',
	fontWeight : '500',
}

const cssPrice = {
	display : 'block',
	marginTop : '6px',
	color : '#999999',
	fontSize : '18px',
	fontWeight : '700',
	textAlign : 'right',
}

const ProductItem = ({productInfo, ...prods}) => {

	const navigate = useNavigate();
	const showDetail = ()=>{
		navigate(`/product/${productInfo.id}`);
	}

	return (
		<li style={cssLi} onClick={showDetail}>
			<i style={cssNew}>{productInfo.new ? 'new' : ''}</i>
			<img src={productInfo.img} alt={productInfo.title} style={cssImage}/>
			<div className="info" style={cssInfo}>
				<strong style={cssTitle}>{productInfo.title}</strong>
				<em style={cssPrice}>{productInfo.price} 원</em>
			</div>
		</li>
	)
}

export default ProductItem