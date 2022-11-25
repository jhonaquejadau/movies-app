import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/movies-app'>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
