import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <> 
      <div className="searchContainer">
        <input type='text' placeholder='Filter podcast...'/>
      </div>
    </>
  )
}

export default SearchBar