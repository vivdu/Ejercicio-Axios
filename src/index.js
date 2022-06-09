import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Personaje from './pages/Personaje';
import Formulario from './pages/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/personajes/' element={<Personaje/>}></Route>
        <Route path='/personajes/create' element={<Formulario/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
