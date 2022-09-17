import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import LocaleContext from '../contexts/LocaleContext';

function Search({ title, titleChange }) {
  const { localeLang } = useContext(LocaleContext);
  return (
    <div className='notes-search'>
      <FaSearch />{' '}
      <input
        type='text'
        placeholder={
          localeLang === 'id' ? 'Cari Catatan...' : 'Search Notes...'
        }
        value={title}
        onChange={(e) => titleChange(e.target.value)}
      />
    </div>
  );
}
export default Search;
