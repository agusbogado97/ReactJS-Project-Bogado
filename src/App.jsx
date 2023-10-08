/* import { useState } from 'react';  */
import './App.css'
import NavBar from './Componentes/NavBar/NavBar';
import Titulo  from './Componentes/Titulo/Titulo';
import TituloForm from './Componentes/TituloForm/TituloForm';
import Card from './Componentes/Card/Card';
import Formulario from './Componentes/Formulario/Formulario';



function App() {
  return (
    <>
      <NavBar/>
      <Titulo tituloApp="Tienda de Ropa" subTituloApp="Encontra lo que queres."/>
      <Titulo tituloApp="Sección de Remeras" subTituloApp="Selecciona la remera que queres."/>
      <Card/>
      <TituloForm/>
      <Formulario/>
    </>
  )
}


export default App;
