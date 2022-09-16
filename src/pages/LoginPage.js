import React from 'react';
import LoginInput from '../components/LoginInput';
import Button from '../utils/Button';
import PropTypes from 'prop-types';
import { login } from '../utils/network-data';
export default function LoginPage({ loginSuccess }) {
	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });
		if (!error) {
			loginSuccess(data);
		}
	}
	return (
		<div className='container'>
			<div className='register-page'>
				<h2 className='register-page__heading'>Masuk</h2>
				<LoginInput login={onLogin} />
				<Button type='link' href='/register'>
					belum punya akun? Daftar
				</Button>
			</div>
		</div>
	);
}
LoginPage.propTypes = {
	loginSuccess: PropTypes.func.isRequired,
};
