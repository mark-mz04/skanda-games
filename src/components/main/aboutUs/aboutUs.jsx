import React from 'react';
import s from './aboutUs.module.css';

export const AboutUs = () => {
	return (
		<section className={`section ${s.container}`}>
			<div className={`${s.textContainer}`}>
				<p className={`${s.text}`}>
					People have been playing since the beginning of time and are getting
					more and more into it. Almost 3 billion people on the planet are
					gamers. And we develop inventive, useful and profitable mobile games
					for them.
				</p>
				<p className={`${s.text}`}>
					Skanda Games is a studio for the development of video games in 2D and
					3D dimensions, including NFT games for Android and iOS on models of
					play-to-earn and pay-to-earn.
				</p>
			</div>
		</section>
	);
};
