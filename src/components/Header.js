import React, { useContext } from 'react';
import { FaBook } from 'react-icons/fa';
import { PopupMenu } from 'react-simple-widgets';
import Button from '../utils/Button';
import PropTypes from 'prop-types';
import ToggleTheme from './ThemeToggle';
import LocaleContext from '../contexts/LocaleContext';
function Header({ logout, email, name }) {
  const onHamburger = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('slide');
  };
  const { localeLang, toggleLangHandler } = useContext(LocaleContext);
  return (
    <nav>
      <div className='brand-container'>
        <div className='title-logo'>
          <FaBook />
          <Button type='link' href='/'>
            NotesApp
          </Button>
        </div>
        <div className='toggle-theme'>
          <ToggleTheme />
        </div>
        <div className='toggle-lang'>
          <button onClick={toggleLangHandler}>
            {localeLang === 'id' ? 'ID' : 'EN'}
          </button>
        </div>
        <PopupMenu>
          <button className='btn-profile'>
            {' '}
            {localeLang === 'id' ? 'Profil' : 'Profile'}
          </button>
          <div className='profile-menu'>
            <div id='circle-avatar' className='circle-avatar'>
              <span>{name.charAt(0)}</span>
            </div>

            <h5 className='profile-menu__name'>{name}</h5>
            <p className='profile-menu__email'>{email}</p>

            <hr style={{ margin: '0 -14px 7px' }} />

            <div className='d-grid'>
              <button onClick={logout} className='btn-logout'>
                {localeLang === 'id' ? 'Keluar' : 'Logout'}
              </button>
            </div>
          </div>
        </PopupMenu>
      </div>

      <ul>
        <li>
          <Button type='link' href='/'>
            {localeLang === 'id' ? 'Beranda' : 'Home'}
          </Button>
        </li>
        <li>
          <Button type='link' href='/archived'>
            {localeLang === 'id' ? 'Arsip' : 'Archived'}
          </Button>
        </li>
        <li>
          <Button type='link' href='/new'>
            {localeLang === 'id' ? 'Tambah Catatan' : 'Add Notes'}
          </Button>
        </li>
      </ul>

      <div className='menu-toggle' onClick={() => onHamburger()}>
        <input type='checkbox' />
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Header;
