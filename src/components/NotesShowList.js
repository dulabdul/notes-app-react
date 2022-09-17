import React, { useContext } from 'react';
import NotFound from './NotFound';
import NotesItem from './NotesItem';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
function NotesShowList({ notes, onDelete, onMoveArchive }) {
  const { localeLang } = useContext(LocaleContext);
  const listNotesActive = notes.filter((note) => note.archived === false);
  return (
    <>
      <h2 className='notes-list_heading'>
        {localeLang === 'id' ? 'Catatan Aktif' : 'Active Notes'}
      </h2>
      {listNotesActive.length === 0 ? (
        <NotFound />
      ) : (
        <div className=' notes-container'>
          {notes.map((note, id) => (
            <NotesItem
              key={id}
              note={note}
              onDelete={onDelete}
              onMoveArchive={onMoveArchive}
            />
          ))}
        </div>
      )}
    </>
  );
}
NotesShowList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onMoveArchive: PropTypes.func.isRequired,
};

export default NotesShowList;
