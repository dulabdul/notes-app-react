import React from 'react';
import NotesAdd from '../components/NotesAdd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';

export default function AddNotesPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler({ title, body }) {
    await addNote({ title, body });
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'Your notes success created.',
    });
    navigate('/');
  }
  return (
    <div className='container'>
      <NotesAdd addNotes={onAddNoteHandler} />
    </div>
  );
}
