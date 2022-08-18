import React from 'react';
import { Slider } from '../../common/slider/slider';
import s from './ourResults.module.css';
import slide1 from '../../../img/slider2/slide2.1.png';
import slide2 from '../../../img/slider1/slide1.2.png';

export const OurResults = () => {
	const slideList = [
		<div className={`${s.slide}`} key={slide1}>
			<img className={s.img} src={slide1} />

			<div className={s.info}>
				<h3 className={s.subtitle}>THIS GAME THISSS</h3>

				<p className={s.text}>
					Comrades! the implementation of the planned targets to a large extent
					determines the creation of appropriate activation conditions.
					Ideological considerations of a higher order, as well as constant
					quantitative growth and the scope of our activity, require us to
					analyze the directions of progressive development.
				</p>
				<p className={s.text}>
					On the other hand, constant quantitative growth and the scope of our
					activity plays an important role in shaping the directions of
					progressive development. The significance of these problems is so
					obvious that the constant information and propaganda support of our
					activities allows us to assess the significance of the corresponding
					activation conditions. It should not be forgotten, however, that the
					constant quantitative growth and the scope of our activity is an
					interesting experiment in testing the system of personnel training,
					which corresponds to urgent needs. Thus, consultation with a broad
					asset is
				</p>
			</div>
		</div>,

		<div className={`${s.slide}`} key={'slide1'}>
			<img className={s.img} src={slide2} />

			<div className={s.info}>
				<h3 className={s.subtitle}>THIS GAME THISSS</h3>

				<p className={s.text}>
					Comrades! the implementation of the planned targets to a large extent
					determines the creation of appropriate activation conditions.
					Ideological considerations of a higher order, as well as constant
					quantitative growth and the scope of our activity, require us to
					analyze the directions of progressive development.
				</p>
				<p className={s.text}>
					On the other hand, constant quantitative growth and the scope of our
					activity plays an important role in shaping the directions of
					progressive development. The significance of these problems is so
					obvious that the constant information and propaganda support of our
					activities allows us to assess the significance of the corresponding
					activation conditions. It should not be forgotten, however, that the
					constant quantitative growth and the scope of our activity is an
					interesting experiment in testing the system of personnel training,
					which corresponds to urgent needs. Thus, consultation with a broad
					asset is
				</p>
			</div>
		</div>,

		<div className={`${s.slide}`} key={'2'}>
			<img className={s.img} src={slide1} />

			<div className={s.info}>
				<h3 className={s.subtitle}>THIS GAME THISSS</h3>

				<p className={s.text}>
					Comrades! the implementation of the planned targets to a large extent
					determines the creation of appropriate activation conditions.
					Ideological considerations of a higher order, as well as constant
					quantitative growth and the scope of our activity, require us to
					analyze the directions of progressive development.
				</p>
				<p className={s.text}>
					On the other hand, constant quantitative growth and the scope of our
					activity plays an important role in shaping the directions of
					progressive development. The significance of these problems is so
					obvious that the constant information and propaganda support of our
					activities allows us to assess the significance of the corresponding
					activation conditions. It should not be forgotten, however, that the
					constant quantitative growth and the scope of our activity is an
					interesting experiment in testing the system of personnel training,
					which corresponds to urgent needs. Thus, consultation with a broad
					asset is
				</p>
			</div>
		</div>,
	];

	return (
		<section className={`section ${s.container}`}>
			<h3 className={`title ${s.title}`}>Our results</h3>

			<Slider
				slideList={slideList}
				sliderContainer={s.sliderContainer}
				slider={s.slider}
				slideContainer={s.slideContainer}
			/>
		</section>
	);
};
