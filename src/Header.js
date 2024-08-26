import React from 'react';
import AddItem from './AddItem.js';
import SearchItem from './SearchItem.js';

const Header = ({title, newItem, setNewItem, handleSubmit,
              search, setSearch, handleSearch}) => {
  return (
    <header>
        <h1>{title}</h1>
        <SearchItem search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}/>
        <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
    </header>
  )
}

Header.defaultProps = {
  title : "Default Title"
}

export default Header