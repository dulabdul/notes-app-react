import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddNotesPage from './pages/AddNotesPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPages from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';

import { getUserLogged, putAccessToken } from './utils/network-data';
export default function App() {
	const [authedUser, setAuthedUser] = useState(null);
	const [isLoading, setLoading] = useState(true);
	async function onLoginSuccess({ accessToken }) {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();

		setAuthedUser(() => data);
	}
	useEffect(() => {
		getUserLogged().then(({ data }) => {
			setAuthedUser(data);
			setLoading(false);
		});
		return () => {
			setLoading(true);
		};
	}, []);
	if (isLoading) {
		return <div className='spinner spinner-loader'></div>;
	}
	if (authedUser === null) {
		return (
			<main>
				<Routes>
					<Route
						path='/*'
						element={<LoginPage loginSuccess={onLoginSuccess} />}
					/>
					<Route path='/register' element={<RegisterPage />} />
				</Routes>
			</main>
		);
	}
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route exatch path='/' element={<HomePage />} />
					<Route exatch path='/notes/:id' element={<DetailPage />} />
					<Route exatch path='/new' element={<AddNotesPage />} />
					<Route exatch path='*' element={<NotFoundPages />} />
				</Routes>
			</main>
		</>
	);
}
