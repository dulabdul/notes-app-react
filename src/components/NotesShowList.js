import React from 'react';
import NotFound from './NotFound';
import NotesItem from './NotesItem';
import PropTypes from 'prop-types';
function NotesShowList({ notes, onDelete, onMoveArchive }) {
  const listNotesActive = notes.filter((note) => note.archived === false);

  return (
    <>
      <h2 className='notes-list_heading'>Actived Notes</h2>
      {listNotesActive.length === 0 ? (
        <NotFound />
      ) : (
        <div className=' notes-container'>
          {listNotesActive.map((note, id) => (
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
