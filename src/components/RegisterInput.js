import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import InputText from '../utils/Forms';
export default function RegisterInput(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onNameChange = (e) => {
		setName(e.target.value);
	};
	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const onSubmitHadler = (e) => {
		e.preventDefault();
		props.register({
			name: name,
			email: email,
			password: password,
		});
	};
	return (
		<form onSubmit={onSubmitHadler} className='register-input'>
			<InputText
				type='text'
				placeholder='Name'
				value={name}
				onChange={onNameChange}
				name='name'
			/>
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
				Register
			</Button>
		</form>
	);
}
RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};
