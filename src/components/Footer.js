import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import Button from '../utils/Button';
export default function Footer() {
  return (
    <footer>
      <p>Reach me at</p>
      <div className='footer_icons'>
        <Button
          target='_blank'
          isExternal
          type='link'
          href='https://github.com/dulabdul'
        >
          <FaGithub />
        </Button>
        <Button
          target='_blank'
          isExternal
          type='link'
          href='https://www.linkedin.com/in/abdul-rahman-2737131a1/'
        >
          <FaLinkedin />
        </Button>
      </div>
      <div className='footer_description'>
        <p>Copyright &copy; 2022</p>
        <p>
          Made by <FaHeart />
          Abdulrahman
        </p>
      </div>
    </footer>
  );
}
