import React, { useContext } from 'react';
import Button from '../utils/Button';
import { FaArrowLeft } from 'react-icons/fa';
import LocaleContext from '../contexts/LocaleContext';

export default function NotFoundPages() {
  const { localeLang } = useContext(LocaleContext);
  return (
    <div className='container'>
      <div className='notfound-container'>
        <div className='notfound-container__error-text'>
          <h1>{localeLang === 'id' ? 'Ada Error 404 Nih' : 'Error 404..'}</h1>
          <p> {localeLang === 'id' ? 'Mau Kembali aja..?' : 'Are You Lost?'}</p>
          <p className='notfound-container__description-error'>
            {localeLang === 'id'
              ? 'Sebagian fitur masih dibangun, kembali aja pencet tombol dibawah...'
              : 'Some page are still in development, maybe you can go back if you want'}
          </p>
        </div>
        <div>
          <Button type='button' onClick={() => window.history.back()} isBack>
            <FaArrowLeft />{' '}
            {localeLang === 'id'
              ? 'Pencet disini buat kembali'
              : 'Yes, bring me to safe place please'}
          </Button>
        </div>
      </div>
    </div>
  );
}
