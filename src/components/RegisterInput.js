import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import InputText from '../utils/Forms';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';
export default function RegisterInput(props) {
  const { localeLang } = useContext(LocaleContext);
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const [error, setError] = useState({
    password: password,
    confirmPassword: confirmPassword,
  });
  const onPasswordValidate = (e) => {
    onPasswordChange(e);
    validateInput(e);
  };
  const onConfirmPasswordValidate = (e) => {
    onConfirmPasswordChange(e);
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'password':
          if (!value) {
            stateObj[name] = `${
              localeLang === 'id'
                ? 'Masukin Password Kamu'
                : 'Please enter Password.'
            }`;
          } else if (confirmPassword && value !== confirmPassword) {
            stateObj['confirmPassword'] = `${
              localeLang === 'id'
                ? 'Password dan konfirmasi password ga cocok nih'
                : 'Password and Confirm Password does not match.'
            }`;
          } else {
            stateObj['confirmPassword'] = confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = `${
              localeLang === 'id'
                ? 'Masukin Password Kamu'
                : 'Please enter Password.'
            }`;
          } else if (password && value !== password) {
            stateObj[name] = `${
              localeLang === 'id'
                ? 'Password dan konfirmasi password ga cocok nih'
                : 'Password and Confirm Password does not match.'
            }`;
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
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
        onBlur={validateInput}
        name='name'
      />
      <InputText
        type='email'
        placeholder='Email'
        value={email}
        onChange={onEmailChange}
        onBlur={validateInput}
        name='email'
      />
      <InputText
        type='password'
        placeholder='Password'
        value={password}
        onChange={onPasswordValidate}
        onBlur={validateInput}
        name='password'
      />
      <InputText
        type='password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={onConfirmPasswordValidate}
        onBlur={validateInput}
        name='confirmPassword'
      />
      {error.confirmPassword && (
        <span className='err'>{error.confirmPassword}</span>
      )}
      <Button type='button' disabled={!error.confirmPassword} isRegister>
        {localeLang === 'id' ? 'Daftar' : 'Register'}
      </Button>
    </form>
  );
}
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
