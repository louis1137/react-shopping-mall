import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'


const Private = ({cssCommon, isUser, productList, ...props}) => {
	return (
		true ? <ProductDetail cssCommon={cssCommon} productList={productList}/> : <Navigate to="/login"/>
	)
}

export default Private