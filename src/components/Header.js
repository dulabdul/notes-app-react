import React from 'react';
import { FaBook } from 'react-icons/fa';
import { PopupMenu } from 'react-simple-widgets';
import Button from '../utils/Button';

function Header() {
	const onHamburger = () => {
		const nav = document.querySelector('nav ul');
		nav.classList.toggle('slide');
	};
	return (
		<nav>
			<div className='logo'>
				<p className='title-logo'>
					<FaBook />
					<Button type='link' href='/'>
						NotesApp
					</Button>
				</p>
			</div>

			<ul>
				<li>
					<Button type='link' href='/'>
						Home
					</Button>
				</li>
				<li>
					<Button type='link' href='/new'>
						Add Notes
					</Button>
				</li>
				<li>
					<PopupMenu>
						<button className='btn-profile'>Profile</button>
						<div className='profile-menu'>
							<div id='circle-avatar' className='circle-avatar'>
								<span>K</span>
							</div>

							<h5 className='profile-menu__name'>John Doe</h5>
							<p className='profile-menu__email'>jd@gmail.com</p>

							<hr style={{ margin: '0 -24px 24px' }} />

							<div className='d-grid'>
								<button className='btn-logout'>Logout</button>
							</div>
						</div>
					</PopupMenu>
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
