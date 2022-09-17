import React, { useState, useEffect } from 'react';
import NotesShowList from '../components/NotesShowList';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/SearchNotes';
import Swal from 'sweetalert2';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
export default function ActivePages() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [title, setTitles] = useState(() => {
    return searchParams.get('title') || '';
  });
  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, []);
  async function onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();
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
        setNotes(data);
      } else {
        Swal.fire('Your notes file is cancel deleted!');
      }
    });
  }
  async function onMoveArchiveHandler(id) {
    await archiveNote(id);
    const { data } = await getActiveNotes();
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'Your notes has been move.',
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
        <NotesShowList
          notes={filteredNotes}
          onDelete={onDeleteHandler}
          onMoveArchive={onMoveArchiveHandler}
        />
      </div>
    </>
  );
}
