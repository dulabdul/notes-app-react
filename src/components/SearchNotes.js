import React from 'react';
import { FaSearch } from 'react-icons/fa';
function Search({ keyword, titleChange }) {
	return (
		<div className='notes-search'>
			<FaSearch />{' '}
			<input
				type='text'
				placeholder='Search Notes'
				value={keyword}
				onChange={(e) => titleChange(e.target.value)}
			/>
		</div>
	);
}
export default Search;
