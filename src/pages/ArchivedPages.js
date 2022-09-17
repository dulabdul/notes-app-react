import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/SearchNotes';
import NotesHiddenList from '../components/NotesHiddenList';
import {
	deleteNote,
	unarchiveNote,
	getArchivedNotes,
} from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
export default function ArchivedPages() {
	const { localeLang } = useContext(LocaleContext);
	const [searchParams, setSearchParams] = useSearchParams();
	const [notes, setNotes] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [title, setTitles] = useState(() => {
		return searchParams.get('title') || '';
	});
	useEffect(() => {
		getArchivedNotes().then(({ data }) => {
			setNotes(data);
			setLoading(false);
		});
		return () => {
			setLoading(true);
		};
	}, []);
	async function onDeleteHandler(id) {
		await deleteNote(id);
		const { data } = await getArchivedNotes();
		Swal.fire({
			title: `${localeLang === 'id' ? 'Kamu Yakin?' : 'Are you sure?'}`,
			text: `${
				localeLang === 'id'
					? 'Kalau udah dihapus gabisa dibalikin'
					: 'Once deleted, you book totally removed!'
			}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
		}).then((result) => {
			if (result.value) {
				Swal.fire(
					`${
						localeLang === 'id'
							? 'Poof! catatan kamu udah dihapus nih!'
							: 'Poof! You notes success deleted'
					}`,
					{
						icon: 'success',
					}
				);
				setNotes(data);
			} else {
				Swal.fire(
					`${
						localeLang === 'id'
							? 'Catatan kamu gajadi di hapus nih'
							: 'Your notes file is cancel deleted!'
					}`
				);
			}
		});
	}
	async function onMoveUnarchiveHandler(id) {
		await unarchiveNote(id);
		const { data } = await getArchivedNotes(id);
		Swal.fire({
			title: `${localeLang === 'id' ? 'Yey! Berhasil' : 'Success!'}`,
			type: 'success',
			text: `${
				localeLang === 'id'
					? 'Catatan kamu berhasil dipindahin'
					: 'Your notes has been move.'
			}`,
		});
		setNotes(data);
	}
	const onSearchHandler = (title) => {
		setTitles(title);
		setSearchParams({ title });
	};
	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(title.toLowerCase());
	});
	if (isLoading) {
		return <div className='spinner spinner-loader'></div>;
	}
	return (
		<>
			<Search title={title} titleChange={onSearchHandler} />
			<div className='container'>
				<NotesHiddenList
					notes={filteredNotes}
					onDelete={onDeleteHandler}
					onMoveArchive={onMoveUnarchiveHandler}
				/>
			</div>
		</>
	);
}
