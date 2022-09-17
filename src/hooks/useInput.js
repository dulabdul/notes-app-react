import { useState } from 'react';

export default function useInput(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);

	const onValueChangeHander = (e) => {
		setValue(e.target.value);
	};
	return [value, onValueChangeHander];
}