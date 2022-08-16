import React from 'react';
import s from './wayWeWork.module.css';
export const WayWeWork = () => {
	return (
		<section className={`section ${s.container}`}>
			<h3 className={`title ${s.title}`}>Way we work.</h3>

			<ul className={s.list}>
				<li className={s.item}>
					We work on the idea and make technical tasks for the project.
				</li>

				<li className={s.item}>Think of an economic model.</li>

				<li className={s.item}>
					The game designer writes the game’s story and how to monetize it.
				</li>

				<li className={s.item}>
					Stage of development, design, prototyping, programming.
				</li>

				<li className={s.item}>Connect tokens, configure smart-contracts.</li>

				<li className={s.item}>We bring NFT to the exchange.</li>

				<li className={s.item}>
					Configuring the conversion of cryptocurrencies.
				</li>

				<li className={s.item}>Testing MVP.</li>

				<li className={s.item}>
					We are preparing the project promotion and release.
				</li>
			</ul>
		</section>
	);
};
