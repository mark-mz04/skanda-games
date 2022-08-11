import React from 'react';
import { Slider } from '../../common/slider/slider';
import s from './services.module.css';

export const Services = () => {
	return (
		<section className={`section ${s.container}`}>
			<Slider />
		</section>
	);
};
