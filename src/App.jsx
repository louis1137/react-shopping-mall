import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './component/Header'
import Home from './page/Home';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Private from './route/Private';
import jsonProduct from './json/product.json';

const cssCommon = {
	inner : {
		position : 'relative',
		margin : 'auto',
		padding : '0 40px',
		width : '1280px',
		height : '100%'
	},
	h2 : {
		margin : '40px 0',
		textAlign : 'center',
		color : '#ff9999',
		fontSize : '32px',
		fontWeight : '700'
	}
}

function App() {

	const [productList, setProductList] = useState(jsonProduct);
	useEffect(()=>{
		// console.log(productList);
	}, []);

	const [isUser, setIsUser] = useState(false);
	const navigate = useNavigate();
	useEffect(()=>{
		if(isUser) navigate('/')
	}, [isUser]);

	return (
		<div className="App">
			<Header cssCommon={cssCommon}/>
			<Routes>
				<Route path="/" element={<Home cssCommon={cssCommon}/>}/>
				<Route path="/product" element={<Product cssCommon={cssCommon} productList={productList}/>}/>
				<Route path="/product/:id" element={<Private cssCommon={cssCommon} isUser={isUser} productList={productList}/>}/>
				<Route path="/login" element={<Login isUser={isUser} setIsUser={setIsUser} cssCommon={cssCommon}/>}/>
			</Routes>
		</div>
	);
}

export default App;
