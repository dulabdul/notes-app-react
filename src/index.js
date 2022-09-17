import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { RSWGlobalStyle } from 'react-simple-widgets/dist/style';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* eslint-disable import/no-unresolved */

const root = createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
    <RSWGlobalStyle />
    <App />
  </BrowserRouter>
);
