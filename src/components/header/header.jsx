import React from 'react';
import s from './header.module.css';
import logo from '../../img/logo.svg';

export const Header = () => {
	return (
		<header className={`section ${s.container}`}>
			<div>
				<img src={logo} alt='logo' />
			</div>

			<nav className={s.menu}>
				<a className={s.link} href='#'>
					About us
				</a>
				<a className={s.link} href='#'>
					Services
				</a>
				<a className={s.link} href='#'>
					Advantages
				</a>
				<a className={s.link} href='#'>
					Way we work
				</a>
				<a className={s.link} href='#'>
					Our results
				</a>
				<a className={s.link} href='#'>
					Client feedback
				</a>
				<a className={s.link} href='#'>
					Career
				</a>
				<a className={s.link} href='#'>
					Contacts
				</a>
			</nav>
		</header>
	);
};
