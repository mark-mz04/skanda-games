import React from 'react';
import s from './contacts.module.css';

export const Contacts = () => {
	return (
		<section className={s.section}>
			<h3 className={`title`}>Contacts</h3>

			<div className={s.container}>
				<div className={s.contactsContainer}>
					<div className={s.contacts}>
						<p className={s.text}>Telephone numbers:</p>
						<p className={s.text}>+77 777 77 777 7</p>
						<p className={s.text}>+7 777 777 77 77</p>
					</div>

					<div className={s.contacts}>
						<p className={s.text}>Email:</p>
						<p className={s.text}>email.1234@.aa</p>
						<p className={s.text}>email.1234@.aa</p>
					</div>
				</div>

				<div className={s.bigTextContainer}>
					<p className={s.bigText}>Let’s keep in touch!</p>
					<p className={s.bigText}>Contact us</p>
				</div>
			</div>
		</section>
	);
};
