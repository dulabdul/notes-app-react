import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import NotesHiddenList from '../components/NotesHiddenList';
import NotesShowList from '../components/NotesShowList';
import Search from '../components/SearchNotes';
import { getAllNotes } from '../utils/local-data';

export default function HomePageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get('title');
	function changeSearchParams(title) {
		setSearchParams({ title });
	}
	return <HomePage defaulttitle={title} titleChange={changeSearchParams} />;
}

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getAllNotes(),
			searchNotes: getAllNotes(),
			title: props.defaulttitle || '',
		};
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onMoveArchiveHandler = this.onMoveArchiveHandler.bind(this);
		this.onSearchHandler = this.onSearchHandler.bind(this);
	}
	onDeleteHandler(id) {
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
				const notes = this.state.notes.filter((note) => note.id !== id);
				const searchNotes = this.state.searchNotes.filter(
					(note) => note.id !== id
				);
				this.setState({
					notes,
					searchNotes,
				});
			} else {
				Swal.fire('Your notes file is cancel deleted!');
			}
		});
	}
	onMoveArchiveHandler(id) {
		Swal.fire({
			title: 'Success',
			type: 'success',
			text: 'Your notes has been move.',
		});
		this.setState((prevState) => ({
			notes: prevState.notes.map((note) => {
				if (note.id === id) {
					return {
						...note,
						archived: !note.archived,
					};
				}
				return note;
			}),
			searchNotes: prevState.searchNotes.map((note) => {
				if (note.id === id) {
					return {
						...note,
						archived: !note.archived,
					};
				}
				return note;
			}),
		}));
	}
	onSearchHandler(title) {
		this.setState(() => {
			return {
				title,
			};
		});
		this.props.titleChange(title);
	}

	render() {
		const notes = this.state.notes.filter((note) => {
			return note.title.toLowerCase().includes(this.state.title.toLowerCase());
		});
		return (
			<>
				<Search title={this.state.title} titleChange={this.onSearchHandler} />
				<div className='container'>
					<NotesShowList
						notes={notes}
						onDelete={this.onDeleteHandler}
						onMoveArchive={this.onMoveArchiveHandler}
					/>
					<NotesHiddenList
						notes={notes}
						onDelete={this.onDeleteHandler}
						onMoveArchive={this.onMoveArchiveHandler}
					/>
				</div>
			</>
		);
	}
}
