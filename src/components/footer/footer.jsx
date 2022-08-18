import React from 'react';
import { Contacts } from './contacts/contacts';
import s from './footer.module.css';

export const Footer = () => {
	return (
		<footer className={`section ${s.container}`}>
			<Contacts />

			<p className={s.subtitle}>Privacy Policy</p>
			<p className={s.text}>site project by Aleksandra Abelha</p>
		</footer>
	);
};
