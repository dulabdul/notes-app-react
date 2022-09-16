import React from 'react';
import NotFound from './NotFound';
import NotesItem from './NotesItem';
import PropTypes from 'prop-types';
function NotesHiddenList({ notes, onDelete, onMoveArchive }) {
  const listNotesActive = notes.filter((note) => note.archived === true);

  return (
    <>
      <h2 className='notes-list_heading'>Archived Notes</h2>
      {listNotesActive.length === 0 ? (
        <NotFound />
      ) : (
        <div className='notes-container'>
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
NotesHiddenList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onMoveArchive: PropTypes.func.isRequired,
};

export default NotesHiddenList;
