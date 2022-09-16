import React from 'react';
import { showFormattedDate } from '../utils/local-data';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import { FaArrowLeft } from 'react-icons/fa';
export default function DetailNotes({ note }) {
  return (
    <>
      <div className='detail-container'>
        <h2 className='detail-container__heading'>{note.title}</h2>
        <p className='detail-container__date'>
          {showFormattedDate(note.createdAt)}
        </p>
        <p className='detail-container__description'>{note.body}</p>
        <Button type='button' onClick={() => window.history.back()} isBack>
          <FaArrowLeft /> Back
        </Button>
      </div>
    </>
  );
}
DetailNotes.propTypes = {
  note: PropTypes.object.isRequired,
};
