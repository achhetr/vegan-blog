import React from 'react';

import inputStyle from './input.module.scss';

const Input = ({ id, name, type, value, placeholder, onChange }) => {
	const onChangeValue = (text) => {
		onChange(text);
	};
	return (
		<div className={inputStyle.Container}>
			<label htmlFor={id} className={inputStyle.Label}>
				{name}
			</label>
			<input
				id={id}
				type={type ? 'text' : type}
				value={value}
				onChange={onChangeValue}
				placeholder={placeholder}
				className={inputStyle.Input}
			/>
		</div>
	);
};

export default Input;
