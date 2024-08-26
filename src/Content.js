import React from 'react';
import ListItem from './listItem';

const randomName = () => {
    const names = ['hatim', 'mohammed', 'saad'];
    const randomInt = Math.floor(Math.random() * 3);
    return names[randomInt];
    
}


const Content = ({items, handleCheck, handleDelete}) => {
    
    return (
    <main>
        <ul>
            {!(items.length) ? <p>Your list is Empty</p> : <span></span>}
            {items.map((obj) => (
                <ListItem 
                    key={obj.id}    
                    obj={obj}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}/>
            ))}
        </ul>
    </main>
  )
}

export default Content;


