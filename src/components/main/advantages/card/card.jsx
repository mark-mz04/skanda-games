import React from 'react';
import s from './card.module.css';

export const Card = ({ text }) => {
	return <p className={s.card}>{text}</p>;
};
