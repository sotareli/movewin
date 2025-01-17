import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PaginaInicial from './PaginaInicial';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/paginaInicial" element={<PaginaInicial />}/>
      <Route path="/" element={<App />}/>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
