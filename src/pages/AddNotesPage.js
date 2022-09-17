import React, { useContext } from 'react';
import NotesAdd from '../components/NotesAdd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
export default function AddNotesPage() {
	const { localeLang } = useContext(LocaleContext);
	const navigate = useNavigate();

	async function onAddNoteHandler({ title, body }) {
		await addNote({ title, body });
		Swal.fire({
			title: `${localeLang === 'id' ? 'Yey! Berhasil' : 'Success'}`,
			type: 'success',
			text: `${
				localeLang === 'id'
					? 'Catatan kamu berhasil dibuat'
					: 'Your notes success created.'
			}`,
		});
		navigate('/');
	}
	return (
		<div className='container'>
			<NotesAdd addNotes={onAddNoteHandler} />
		</div>
	);
}
