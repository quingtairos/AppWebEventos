import './App.css';
import Inicio from './components/Inicio/Inicio';
import Header from './components/Header';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="App">
      <Inicio />
      <Header />
    </div> )
}

export default App;
