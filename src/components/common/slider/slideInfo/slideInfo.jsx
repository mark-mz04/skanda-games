import React from 'react';
import s from './slideInfo.module.css';

export const SlideInfo = ({ title, text }) => {
	return (
		<div className={s.container}>
			<h3 className={s.title}>{title}</h3>
			<p className={s.text}>{text}</p>
		</div>
	);
};
