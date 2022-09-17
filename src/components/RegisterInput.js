import React from 'react';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import InputText from '../utils/Forms';
import useInput from '../hooks/useInput';

export default function RegisterInput(props) {
	const [name, onNameChange] = useInput('');
	const [email, onEmailChange] = useInput('');
	const [password, onPasswordChange] = useInput('');
	const onSubmitHandler = (e) => {
		e.preventDefault();
		props.register({
			name: name,
			email: email,
			password: password,
		});
	};
	return (
		<form onSubmit={onSubmitHandler} className='register-input'>
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
