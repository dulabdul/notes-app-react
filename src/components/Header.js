import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
const onHamburger = () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('slide');
};
function Header() {
  return (
    <nav>
      <div className='logo'>
        <p className='title-logo'>
          <FaBook />
          <Link to='/'>NotesApp</Link>
        </p>
      </div>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/new'>Add Notes</Link>
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

export default Header;
