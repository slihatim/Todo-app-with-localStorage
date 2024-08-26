import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({ obj : {id, checked, item}, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
        <input 
            type='checkbox'
            onChange={() => handleCheck(id)}
            checked={checked}
        />
        <label style={(checked) ? {textDecoration : 'line-through'} : undefined}>{item}</label>
        <FaTrashAlt 
            onClick={() => handleDelete(id)}
            role='button'
            tabIndex="0"
        />
    </li>
  )
}

export default ListItem;