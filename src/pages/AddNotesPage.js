import React from 'react';
import NotesAdd from '../components/NotesAdd';
import Swal from 'sweetalert2';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

export default function AddNotesPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = ({ title, body }) => {
    addNote({ title, body });
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'Your notes success created.',
    });
    navigate('/');
  };
  return (
    <div className='container'>
      <NotesAdd addNotes={onAddNoteHandler} />
    </div>
  );
}
