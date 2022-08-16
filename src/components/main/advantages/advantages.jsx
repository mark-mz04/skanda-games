import React from 'react';
import s from './advantages.module.css';
import { Card } from './card/card';

export const Advantages = () => {
	return (
		<section className={`section ${s.container}`}>
			<h3 className={`title`}>Why choose Skanda.Games?</h3>

			<div className={s.cardList}>
				<Card text='Outsourcing the development of the game to our team provides you with an expert in the selection of technologies, effective solutions, skills of experienced game designers and a cost-effective model of production organization.' />

				<Card text='We love complex tasks and always approach them flexibly. If we do not have the right specialists, we find them quickly, as we are part of the international outstaffing company Skanda.Pro with a base of reliable professionals of about 5,000 people.' />

				<Card text='Our approach in game development is to achieve a balance between creative ideas, dizzying stories, vivid images of characters and practical benefits for users.' />

				<Card text='Every gamer deserves no mistakes to spoil his enjoyment of the game. Our QA engineers strive to eliminate even  small bugs in production and achieve maximum quality.' />

				<Card text='Our team includes 25 specialists in the fields of design, IT and marketing.' />

				<Card text='We are open to cooperating with publishers, partners and game users. We invite everyone who wants to contact us to our community, at any time.' />
			</div>
		</section>
	);
};
