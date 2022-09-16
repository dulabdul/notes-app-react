import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* eslint-disable import/no-unresolved */

const root = createRoot(document.querySelector('#root'));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
