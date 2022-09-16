import React, { useState, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import NotesHiddenList from '../components/NotesHiddenList';
import NotesShowList from '../components/NotesShowList';
import Search from '../components/SearchNotes';
// import LocaleContext from '../contexts/LocaleContext';
import { getAllNotes, deleteNote, archivedHandler } from '../utils/local-data';

export default function HomePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [notes, setNotes] = useState(() => getAllNotes());
	const [title, setTitles] = useState(() => {
		return searchParams.get('title') || '';
	});
	// const {locale} = useContext(LocaleContext) kode untuk context nanti
	// useEffect(() => {
	// 	getAllNotes().then(({ data }) => {
	// 		setNotes(data);
	// 	});
	// }, []);
	const onDeleteHandler = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'Once deleted, you book totally removed!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
		}).then((result) => {
			if (result.value) {
				Swal.fire('Poof! You notes success deleted', {
					icon: 'success',
				});
				deleteNote(id);
				setNotes(getAllNotes());
				// const notes = this.state.notes.filter((note) => note.id !== id);
				// const searchNotes = this.state.searchNotes.filter(
				// 	(note) => note.id !== id
				// );
				// this.setState({
				// 	notes,
				// 	searchNotes,
				// });
			} else {
				Swal.fire('Your notes file is cancel deleted!');
			}
		});
	};
	const onMoveArchiveHandler = (id) => {
		Swal.fire({
			title: 'Success',
			type: 'success',
			text: 'Your notes has been move.',
		});
		archivedHandler(id);
		setNotes(getAllNotes());
	};
	const onSearchHandler = (title) => {
		setTitles(title);
		setSearchParams({ title });
	};
	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(title.toLowerCase());
	});
	return (
		<>
			<Search title={title} titleChange={onSearchHandler} />
			<div className='container'>
				<NotesShowList
					notes={filteredNotes}
					onDelete={onDeleteHandler}
					onMoveArchive={onMoveArchiveHandler}
				/>
				<NotesHiddenList
					notes={filteredNotes}
					onDelete={onDeleteHandler}
					onMoveArchive={onMoveArchiveHandler}
				/>
			</div>
		</>
	);
}
