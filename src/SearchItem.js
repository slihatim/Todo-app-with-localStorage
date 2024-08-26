import React from 'react';
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';

const SearchItem = ({search, setSearch, handleSearch}) => {
  return (
    <form className='addForm' onSubmit={(e) => e.preventDefault()}>
        <input  autoFocus 
                type='text' 
                placeholder='Search for items'
                role='searchbox'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
        ></input>
    </form>
  )
}

export default SearchItem;