/* import { useState } from 'react';  */
import './App.css'

/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */

import NavBar from './Componentes/NavBar/NavBar';
import Titulo  from './Componentes/Titulo/Titulo';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';





function App() {
  return (
    <div className='App'>

        <NavBar/>
        <Titulo tituloApp="Tienda de Ropa" subTituloApp="Encontra lo que queres."/>
        <ItemListContainer/>

    </div>
  )
}


export default App;
