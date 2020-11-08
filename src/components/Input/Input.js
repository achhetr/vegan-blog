import React from 'react';
import inputStyle from './input.module.scss';

const Input = ({ placeholder, type, value, onChange }) => (
	<div className={inputStyle.InputContainer}>
		<input
			className={inputStyle.Input}
			type={type}
			name="name"
			value={value}
			onChange={onChange}
		/>
		<label for="name" className={inputStyle.Label}>
			<span className={inputStyle.Span}>{placeholder}</span>
		</label>
	</div>
);

export default Input;
