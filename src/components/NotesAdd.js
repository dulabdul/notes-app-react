import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function NotesAdd(props) {
	const [inputTitle, setInputTitle] = useState('');
	const [limit, setLimit] = useState(50);
	const [char, setChar] = useState(50);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const onTitleChangeEventHandler = (e) => {
		if (e.target.value.length <= 50) {
			setInputTitle(e.target.value);
			setChar(limit - e.target.value.length);
			setTitle(e.target.value);
		}
	};
	const onBodyChangeEventHandler = (e) => {
		setBody(e.target.innerHTML);
	};
	const onSubmitEventHandler = (e) => {
		e.preventDefault();
		props.addNotes({ title, body });
		setTitle('');
		setBody('');
		setInputTitle('');
		setChar(50);
	};

	return (
		<>
			<div className='input-notes'>
				<h2>Add Notes</h2>
				<form onSubmit={onSubmitEventHandler}>
					<p className={`add-note__title-limit ${char === 0 ? 'zero' : ''}`}>
						Character Left : {char}
					</p>
					<input
						className='add-note__title'
						type='text'
						value={title}
						onChange={onTitleChangeEventHandler}
						placeholder='Add Title For Notes'
						required
					/>
					<div
						className='add-body'
						contentEditable
						onInput={onBodyChangeEventHandler}
						placeholder='Add your body notes'
					/>
					<button type='submit'>
						<FaPlus /> Create
					</button>
				</form>
			</div>
		</>
	);
}
