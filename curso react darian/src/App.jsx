import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { saludar, despedirse } from './ejemplos/Utilidades.js'
import {Tutores} from './ejemplos/Tutores.jsx'
import {Usuario} from './components/Usuario/Usuario'
import {Clicker} from './ejemplos/Clicker'
import Header from './components/Header/Header.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//instalar bootstrap npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';//simplemente imporando esta linea mas instalando bootstrap a mi proyecto ya lo paso a usar
import {Button} from "react-bootstrap"


function App() {
  const [count, setCount] = useState(0);
  const clickear = () => console.log("Hola mundo!")
  // saludar()
  // despedirse()

  //Usuarios.jsx corresponde a este componente //aca use una estructura de datos para que sea dinamico
  // const profe = {
  //   nombre: "Fernando",
  //   curso: "React JS",
  //   edad: 18,
  //   rol: "Alumno"
  // }
  return (
    
    <div>
      <Header />
      <ItemListContainer mensaje = "Hola Darian"/>

      <div className="container">
        <button className = "btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button onClick={clickear} size="lg" variant="warning">Darian</Button>
        <Button variant="warning">Fernando</Button>
        <Button variant="warning">Darian</Button>
      </div>      
    </div>
  )
}

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
    
    {/* <Usuario nombre="Darian" edad={28} curso="React" rol="Alumno"/> */}

  {/* <Tutores /> */}

  {/* <Clicker init={15} step={1}/>
  <Clicker init={50} step={5}/>
  <Clicker init={2} step={2}/> */}}

export default App
