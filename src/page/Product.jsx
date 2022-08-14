import React, { useState, useEffect } from 'react';
import ProductNav from '../component/ProductNav';
import ProductItem from '../component/ProductItem';



const Product = ({cssCommon, productList, ...props}) => {

	const cssUl = {
		overflow : 'hidden',
		marginTop : '30px',
	}

	return (
		<>
			<div className="inner" style={cssCommon.inner}>
				<h2 style={cssCommon.h2}>Product</h2>
				<ProductNav/>
				<div className="product_list">
					<ul style={cssUl}>
						{
							productList.products.map((info, index)=>{
								return <ProductItem key={index} productInfo={info}/>
							})
						}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Product