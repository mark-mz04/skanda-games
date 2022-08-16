import React from 'react';
import s from './form.module.css';

export const Form = () => {
	return (
		<section className={`section ${s.container}`}>
			<h3 className={`title`}>Find out what we can create for you!</h3>

			<form className={`${s.formContainer}`}>
				<input type='text' className={`${s.input}`} placeholder='name' />

				<input type='email' className={`${s.input}`} placeholder='e-mail' />

				<div className={`${s.numberBtnContainer}`}>
					<input
						type='tel'
						className={`${s.input} ${s.inputNumber}`}
						placeholder='number'
					/>
					<button className={s.btn} type='submit'>
						SEND
					</button>
				</div>
			</form>
		</section>
	);
};
