import React, { useState, useEffect } from 'react';
import s from './slider.module.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Slider = ({ sliderContainer, slider, slideList }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const prevIndex = activeIndex ? activeIndex - 1 : slideList.length - 1;
	const nextIndex = activeIndex === slideList.length - 1 ? 0 : activeIndex + 1;

	// const handlerLeftClick = () => {
	// 	setActiveIndex((current) => (current ? current - 1 : slideList.length - 1));
	// };
	// const handlerRightClick = () => {
	// 	setActiveIndex((current) =>
	// 		current === slideList.length - 1 ? 0 : current + 1
	// 	);
	// };

	useEffect(() => {
		setInterval(() => {
			setActiveIndex((current) => {
				const next = current === slideList.length - 1 ? 0 : current + 1;
				return next;
			});
		}, 15000);
	}, []);

	return (
		<div className={`${sliderContainer}`}>
			{/* <FaChevronLeft onClick={handlerLeftClick} /> */}

			<div className={slider}>
				<div className={`${s.slide} ${s.slidePrev}`} key={prevIndex}>
					{slideList[prevIndex]}
				</div>

				<div className={`${s.slide}`} key={activeIndex}>
					{slideList[activeIndex]}
				</div>

				<div className={`${s.slide} ${s.slideNext}`} key={nextIndex}>
					{slideList[nextIndex]}
				</div>
			</div>

			{/* <FaChevronRight onClick={handlerRightClick} />  */}
		</div>
	);
};
