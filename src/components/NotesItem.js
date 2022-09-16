import React from 'react';
import { showFormattedDate } from '../utils/local-data';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import parser from 'html-react-parser';
import { FaTrashAlt, FaArchive, FaClock } from 'react-icons/fa';
function NotesItem({ note, onDelete, onMoveArchive }) {
	console.log(note);
	return (
		<div className='notes-item'>
			<div className='notes-item__body'>
				<h3 className='notes-item__head'>
					<Button type='link' href={`/notes/${note.id}`}>
						{note.title}
					</Button>
				</h3>
				<p className='notes-item__date'>
					<FaClock /> {showFormattedDate(note.createdAt)}
				</p>
				<p className='notes-item__content'>
					{parser(
						note.body.length > 130
							? `${note.body.substring(0, 130)}...`
							: `${note.body}...`
					)}
					{/* {note.body} */}
					<Button type='link' href={`/notes/${note.id}`}>
						read more
					</Button>
				</p>
			</div>
			<div className='notes-item__button'>
				<Button isDelete isPrimary onClick={() => onDelete(note.id)}>
					<FaTrashAlt /> Delete
				</Button>
				<Button isArchived onClick={() => onMoveArchive(note.id)}>
					<FaArchive />
					{!note.archived ? ' Archived' : ' Moved'}
				</Button>
			</div>
		</div>
	);
}
NotesItem.propTypes = {
	note: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	onMoveArchive: PropTypes.func.isRequired,
};
export default NotesItem;
