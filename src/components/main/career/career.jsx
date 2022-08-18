import React from 'react';
import s from './career.module.css';
import { VacancyCard } from './vacancyCard/vacancyCard';

export const Career = () => {
	return (
		<section className={`section ${s.container}`}>
			<h3 className={`title`}>Career</h3>

			<p className={s.text}>
				If you dream of a real professional experience at Gamedev and want to
				work in our team, declare yourself. Leave your coordinates and pass a
				small test on the level of professional skills.
			</p>

			<h3 className={`title`}>Who we need right now:</h3>

			<div className={s.cardList}>
				<VacancyCard
					subtitle={'Senior/Middle Unity developer'}
					text={
						'Ideological considerations of a higher order, as well as a new model of organizational activity, make it possible to assess the value of new proposals. In the same way, the new model'
					}
				/>

				<VacancyCard
					subtitle={'Middle Unity developer'}
					text={
						'Ideological considerations of a higher order, as well as a new model of organizational activity, make it possible to assess the value of new proposals. In the same way, the new model'
					}
				/>
			</div>

			<div className={s.btnContainer}>
				<div className={s.btnBack}>
					<div className={s.btnBgr}></div>
				</div>
				<div className={s.btnNext}>
					<div className={s.btnBgr}></div>
				</div>
			</div>
		</section>
	);
};
