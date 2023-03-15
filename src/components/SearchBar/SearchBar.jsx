import React from 'react';
import './SearchBar.css';

const SearchBar = ({setSearchterm}) => {
  return (
    <> 
      <div className="searchContainer">
        <input 
          type='text' 
          placeholder='Filter podcast...'
          onChange={(event) => {
            setSearchterm(event.target.value)
          }} 
        />
      </div>
    </>
  )
}

export default SearchBar