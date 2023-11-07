import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario';
import { DetailListContainer } from './components/DetailListContainer';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<div>
			<BrowserRouter>
				<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
				<Routes>
					<Route path='/' element={<ProductList allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}/>
					<Route path='/contacto' element={<Formulario/>}/>
					<Route path='/detalle' element={<DetailListContainer allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}/>
				</Routes>

			</BrowserRouter>
		</div>
	);
}

export default App;