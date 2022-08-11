import React, { useState, useEffect } from 'react';
import s from './slider.module.css';
import slide1 from '../../../img/slider1/slide1.1.png';
import slide2 from '../../../img/slider1/slide1.2.png';
import slide3 from '../../../img/slider1/slide1.3.png';
import slide4 from '../../../img/slider1/slide1.4.png';
import slide5 from '../../../img/slider1/slide1.5.png';
import slide6 from '../../../img/slider1/slide1.6.png';
import { SlideInfo } from './slideInfo/slideInfo';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Slider = () => {
	const imgList = [
		<div className={`${s.img} ${s.slide1}`} key={slide1}>
			<SlideInfo
				title={'Find a fresh concept for promotion'}
				text={
					'If you are a representative of a publishing company and are looking for new projects, then we are open to expertise and cooperation. Our team, which includes game designers, developers, artists, seethes with new ideas and creative solutions. With all the passion of professionals we turn fresh concepts into competitive gameplay.'
				}
			/>
		</div>,
		<div className={`${s.img} ${s.slide2}`} key={slide2}>
			<SlideInfo
				title={'Turn-key mobile game development'}
				text={
					'Do you want to make your game idea come true from scratch? Choose IT solutions that are tested on successful projects. Our team uses advanced Unity technology to develop 3D games on mobile devices and PC — from concept to release.'
				}
			/>
		</div>,
		<div className={`${s.img} ${s.slide3}`} key={slide3}>
			<SlideInfo
				title={'2D / 3D Concept Art Outsourcing Services'}
				text={
					'Do you already have a website, application or corporate solution that needs to be improved? We integrate game mechanics, elements, realistic characters with a unique design into the existing system.'
				}
			/>
		</div>,
		<div className={`${s.img} ${s.slide4}`} key={slide4}>
			<SlideInfo
				title={'NFT Games Development'}
				text={
					'Our team will help create a game using the play-to-earn / pay-to-earn model using NFT. If you do not have the time and experience to navigate the market NFT games, you should use the services of professionals in the field. We develop the design and tokenomics of NFT games of any level of complexity.'
				}
			/>
		</div>,
		<div className={`${s.img} ${s.slide5}`} key={slide5}>
			<SlideInfo
				title={'Each with their own meta universe'}
				text={
					'The trend of recent years is the creation of meta-universes that offer users an increasingly exciting gaming experience. Do you know what meta-universe you want to create and looking for, who’s implementing your idea? We use advanced technology, we know how to combine fictitious worlds and real activity to open up new opportunities for players "to be different"..'
				}
			/>
		</div>,
		<div className={`${s.img} ${s.slide6}`} key={slide6}>
			<SlideInfo
				title={'Outstaffing or outsourcing'}
				text={
					'There is an interesting idea, but there is not enough team of developers or individual specialists? Skanda.Games is pleased to assist you in finding professionals with relevant experience. We offer different models of cooperation and are ready to provide the necessary specialists for the creation of high-quality IT projects.'
				}
			/>
		</div>,
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const prevIndex = activeIndex ? activeIndex - 1 : imgList.length - 1;
	const nextIndex = activeIndex === imgList.length - 1 ? 0 : activeIndex + 1;

	// const handlerLeftClick = () => {
	// 	setActiveIndex((current) => (current ? current - 1 : imgList.length - 1));
	// };
	// const handlerRightClick = () => {
	// 	setActiveIndex((current) =>
	// 		current === imgList.length - 1 ? 0 : current + 1
	// 	);
	// };

	useEffect(() => {
		setInterval(() => {
			setActiveIndex((current) => {
				const next = current === imgList.length - 1 ? 0 : current + 1;
				return next;
			});
		}, 4000);
	}, []);

	// console.log(activeIndex);

	return (
		<div className={`${s.container}`}>
			{/* <FaChevronLeft onClick={handlerLeftClick} /> */}
			<h3 className={`title ${s.title}`}>
				What topical issue do you need to reach now?{' '}
			</h3>

			<div className={s.slider}>
				<div className={`${s.slide} ${s.slidePrev}`} key={prevIndex}>
					{imgList[prevIndex]}
				</div>

				<div className={`${s.slide}`} key={activeIndex}>
					{imgList[activeIndex]}
				</div>

				<div className={`${s.slide} ${s.slideNext}`} key={nextIndex}>
					{imgList[nextIndex]}
				</div>
			</div>

			<div className={s.bottomGrd}></div>

			{/* <FaChevronRight onClick={handlerRightClick} /> */}
		</div>
	);
};
