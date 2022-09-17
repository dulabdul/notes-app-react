import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../utils/Forms';
import Button from '../utils/Button';
import useInput from '../hooks/useInput';

export default function LoginInput(props) {
	const [email, onEmailChange] = useInput('');
	const [password, onPasswordChange] = useInput('');
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
