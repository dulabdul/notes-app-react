import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

function NotFound() {
  const { localeLang } = useContext(LocaleContext);
  return (
    <p className='notes-list__empty-msg'>
      {localeLang === 'id'
        ? 'yahh tidak ada catatan...'
        : 'upss not found notes...'}
    </p>
  );
}

export default NotFound;
