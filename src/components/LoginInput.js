import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputText from '../utils/Forms';
import Button from '../utils/Button';

export default function LoginInput(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		props.login({
			email: email,
			password: password,
		});
	};
	return (
		<form onSubmit={onSubmitHandler} className='register-input'>
			<InputText
				type='email'
				placeholder='Email'
				value={email}
				onChange={onEmailChange}
				name='email'
			/>
			<InputText
				type='password'
				placeholder='Password'
				value={password}
				onChange={onPasswordChange}
				name='password'
			/>
			<Button type='button' isRegister>
				Login
			</Button>
		</form>
	);
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
};
