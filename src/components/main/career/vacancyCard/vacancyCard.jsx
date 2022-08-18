import React from 'react';
import s from './vacancyCard.module.css';

export const VacancyCard = ({ subtitle, text }) => {
	return (
		<div className={`${s.container}`}>
			<h3 className={`${s.subtitle}`}>{subtitle}</h3>

			<p className={s.text}>{text}</p>
			<button className={s.btn}>more!</button>
		</div>
	);
};
