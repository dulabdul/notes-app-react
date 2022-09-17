import React from 'react';
import propTypes from 'prop-types';
export default function InputText(props) {
	const { value, type, placeholder, name, inputClassName, onChange, ref } =
		props;
	// const [hasError, setHasError] = useState(null);
	// let pattern = '';
	// if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
	// const onChange = (e) => {
	// 	const target = {
	// 		target: {
	// 			name: name,
	// 			value: e.target.value,
	// 		},
	// 	};
	// 	if (type === 'email') {
	// 		if (!pattern.test(e.target.value)) setHasError(errorResponse);
	// 		else setHasError(null);
	// 	}
	// };
	return (
		<div className='input-group'>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				ref={ref}
				onChange={onChange}
				className={['input-control', inputClassName].join(' ')}
			/>
		</div>
	);
}

InputText.defaultProps = {
	type: 'text',
	placeholder: 'Please type here...',
};

InputText.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	onChange: propTypes.func.isRequired,
	type: propTypes.string,
	placeholder: propTypes.string,
	inputClassName: propTypes.string,
};
