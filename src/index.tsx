import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { css, cx } from '@emotion/css'
// require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <div className={css`
   min-height:100%; background-color:#141414
    `}>
      <App />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
