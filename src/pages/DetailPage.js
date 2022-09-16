import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailNotes from '../components/DetailNotes';
import { getNote } from '../utils/local-data';
export default function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(getNote(id));

  if (note === null) {
    return <p>Notes Found Notes</p>;
  }
  return (
    <div className='container'>
      <DetailNotes note={note} id={id} />
    </div>
  );
}
