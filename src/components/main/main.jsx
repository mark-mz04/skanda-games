import React from 'react';
import { AboutUs } from './aboutUs/aboutUs';
import { Advantages } from './advantages/advantages';
import { Services } from './services/services';
import { WayWeWork } from './wayWeWork/wayWeWork';
import { OurResults } from './ourResults/ourResults';
import { ClientFeedback } from './clientFeedback/clientFeedback';
import { Career } from './career/career';

export const Main = () => {
	return (
		<main>
			<AboutUs />
			<Services />
			<Advantages />
			<WayWeWork />
			<OurResults />
			<ClientFeedback />
			<Career />
		</main>
	);
};
