import './App.css';
import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import Inicio from './components/Inicio/Inicio';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
      </p>
    </>
  )
} */
const App = () => {
  return (
    <div className="App">
      {/* <h1>Hola </h1>
      <p>
        ¡Bienvenido a AppWebEventos!
      </p> */}
      <Inicio />
      
      <Header />
    </div>
    
        )


}

export default App;
