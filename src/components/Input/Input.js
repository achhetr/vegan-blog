import React from 'react';

const Input = (props) => {
	const onChangeValue = (text) => {
		props.onChange(text);
	};
	return (
		<>
			<input
				value={props.value}
				onChange={onChangeValue}
				placeholder={props.placeholder}
			/>
		</>
	);
};

export default Input;
