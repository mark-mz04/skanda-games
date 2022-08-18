import React from 'react';
import s from './clientCard.module.css';

export const ClientCard = () => {
	return (
		<div className={`${s.container}`}>
			<div className={s.clientContainer}>
				<div className={s.img} />

				<div className={s.info}>
					<p className={` ${s.name}`}>Random Name</p>
					<p className={s.text}>Second inform</p>
				</div>
			</div>

			<p className={s.text}>
				The task of the organization, in particular the established structure of
				the organization, contributes to the preparation and implementation of
				systems of mass participation. In the same way, the constant outreach
				support of our activities allows us to appreciate the value of systems
				of mass participation. Comrades! consultation with a broad asset largely
				determines the creation of development forms. In the same way, the new
				model of organizational activity makes it possible to assess the
				significance of significant financial and administrative conditions.
			</p>
		</div>
	);
};
