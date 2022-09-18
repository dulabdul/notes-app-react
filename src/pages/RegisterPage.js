import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import Button from '../utils/Button';
import { register } from '../utils/network-data';

export default function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
  return (
    <div className='container'>
      <div className='register-page'>
        <h2 className='register-page__heading'>Daftar</h2>
        <RegisterInput register={onRegisterHandler} />
        <Button type='link' href={'/'}>
          sudah punya akun? Masuk
        </Button>
      </div>
    </div>
  );
}
