import React from 'react';
import ReactDOM from 'react-dom';
import "../src/index.css"
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as dotenv from 'dotenv';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
    ,
  document.getElementById('root')
);


