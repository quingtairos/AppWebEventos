import './App.css';
import Inicio from './components/Inicio/Inicio';
import Header from './components/Header';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* ReactDOM.render(
  <React.StrictMode>
    <Inicio />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
); */

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

const App = () => {
  return <BrowserRouter>

    <div className="App">
      <Header />
      <Routes>
        <Route path="">
          {/* <Navigate to="/" /> */}
          <Route path='/' element={<Navigate to="/inicio"/>} />{/* </Route> */}

        </Route>
      </Routes>
      <Inicio />
      
    </div> 

    </BrowserRouter>
}

export default App;
