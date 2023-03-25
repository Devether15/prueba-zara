import React from 'react';
import './SearchBar.css';

const SearchBar = ({setSearchterm, feedCount}) => {
  return (
    <> 
      <div className="searchContainer">
        <div className='feedCount'>{feedCount}</div>
        <input 
          type='text' 
          placeholder='Filter podcast...'
          className='feedCountInput'
          onChange={(event) => {
            setSearchterm(event.target.value)
          }} 
        />
      </div>
    </>
  )
}

export default SearchBar