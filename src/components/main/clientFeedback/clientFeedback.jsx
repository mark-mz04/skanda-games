import React from 'react';
import { ClientCard } from './clientCard/clientCard';
import s from './clientFeedback.module.css';

export const ClientFeedback = () => {
	return (
		<section className={`section ${s.container}`}>
			<div className={s.bgrTop}></div>
			<h3 className={`title ${s.title}`}>Client feedback</h3>

			<ClientCard />
			<ClientCard />

			<div className={s.btn}></div>
		</section>
	);
};
