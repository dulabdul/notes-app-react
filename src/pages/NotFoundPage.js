import React from 'react';
import Button from '../utils/Button';
import { FaArrowLeft } from 'react-icons/fa';
export default function NotFoundPages() {
  return (
    <div className='container'>
      <div className='notfound-container'>
        <div className='notfound-container__error-text'>
          <h1>Error 404</h1>
          <p> Are you lost?</p>
          <p className='notfound-container__description-error'>
            Some page are still in development, maybe you can go back if you
            want
          </p>
        </div>
        <div>
          <Button type='button' onClick={() => window.history.back()} isBack>
            <FaArrowLeft /> Yes, bring me to safe place please
          </Button>
        </div>
      </div>
    </div>
  );
}
