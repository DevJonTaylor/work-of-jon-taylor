import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/work-of-jon-taylor">
      <App />
    </BrowserRouter>
  </React.StrictMode>
  ,
  rootElement
);
reportWebVitals();
