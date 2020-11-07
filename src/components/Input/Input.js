import React from 'react';
import inputStyle from './input.module.scss';

const Input = ({ placeholder, type }) => (
	<div className={inputStyle.InputContainer}>
		<input className={inputStyle.Input} type={type} required name="name" />
		<label for="name" className={inputStyle.Label}>
			<span className={inputStyle.Span}>{placeholder}</span>
		</label>
	</div>
);

export default Input;
