import React from 'react';
import {FaPlus} from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input  name='addItem' 
                autoFocus 
                type='text' 
                placeholder='Add item'
                required
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
        ></input>
        <button type='submit'>
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem;