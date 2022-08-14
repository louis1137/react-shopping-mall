import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const cssItemArea = {
	position : 'absolute',
	top : '300px',
	left : '50%',
	transform : 'translateX(-50%)',
};

const cssItemDetail = {
	padding : '80px 100px',
	border : '1px solid #ffdddd',
	borderRadius : '8px',
};

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

const ProductDetail = ({cssCommon, productList, ...props}) => {

	const params = useParams();
	const productId = params.id;

	const getProductInfo = ()=>{
		let item=null;
		productList.products.map((info)=>{
			console.log(info , productId)
			if(info.id==productId) item=info;
		});
		return item;
	}
	const productInfo = getProductInfo();

	return (
		<>
			<h2 style={cssCommon.h2}>Product Detail</h2>
			<div className="item_area" style={cssItemArea}>
				<div className="item_detail" style={cssItemDetail}>
				<img src={productInfo.img} alt={productInfo.title} style={cssImage}/>
				<div className="info" style={cssInfo}>
					<strong style={cssTitle}>{productInfo.title}</strong>
					<em style={cssPrice}>{productInfo.price} 원</em>
				</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetail