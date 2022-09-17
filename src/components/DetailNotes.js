import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import parser from 'html-react-parser';
import { FaArrowLeft } from 'react-icons/fa';
import LocaleContext from '../contexts/LocaleContext';
import showFormattedDate from '../utils/formatDate';
export default function DetailNotes({ note }) {
	const { localeLang } = useContext(LocaleContext);
	return (
		<>
			<div className='detail-container'>
				<h2 className='detail-container__heading'>{note.title}</h2>
				<p className='detail-container__date'>
					{showFormattedDate(note.createdAt)}
				</p>
				<p className='detail-container__description'>{parser(note.body)}</p>
				<Button type='button' onClick={() => window.history.back()} isBack>
					<FaArrowLeft /> {localeLang === 'id' ? 'Kembali' : 'Back'}
				</Button>
			</div>
		</>
	);
}
DetailNotes.propTypes = {
	note: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
