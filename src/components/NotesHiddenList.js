import React, { useContext } from 'react';
import NotFound from './NotFound';
import NotesItem from './NotesItem';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
function NotesHiddenList({ notes, onDelete, onMoveArchive }) {
  const { localeLang } = useContext(LocaleContext);
  const listNotesActive = notes.filter((note) => note.archived === true);
  console.log(listNotesActive);
  return (
    <>
      <h2 className='notes-list_heading'>
        {localeLang === 'id' ? 'Arsip Catatan' : 'Archived Notes'}
      </h2>
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
