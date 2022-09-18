import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InputText from '../utils/Forms';
import Button from '../utils/Button';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

export default function LoginInput(props) {
  const { localeLang } = useContext(LocaleContext);
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
        {localeLang === 'id' ? 'Masuk' : 'Login'}
      </Button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
