/* import { useState } from 'react';  */
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Componentes/NavBar/NavBar';
import Titulo  from './Componentes/Titulo/Titulo';
import TituloForm from './Componentes/TituloForm/TituloForm';
import Card from './Componentes/Card/Card';
import Formulario from './Componentes/Formulario/Formulario';




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Titulo tituloApp="Tienda de Ropa" subTituloApp="Encontra lo que queres."/>
        <Titulo tituloApp="Sección de Remeras" subTituloApp="Selecciona la remera que queres."/>
        <Card/>
        <TituloForm/>
        <Formulario/>
      </BrowserRouter>
    </div>
  )
}


export default App;
