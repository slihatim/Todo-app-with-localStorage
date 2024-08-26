import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer.js';
import {useState, useEffect} from 'react';


const name = 'Hatim SLIMANI';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState(JSON.parse( localStorage.getItem('list') ) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  //Updating the localStorage
  useEffect( () => {
    localStorage.setItem('list', JSON.stringify(items));
  }, [items]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setNewItem('');

    const newArray = [...items, { 
      id : items.length ? items[items.length-1].id+1 : 1,
      checked : false,
      item : newItem
    }]
    setItems(newArray);

  }

  const handleCheck = async (id) => {
    let listItems = [...items] ;
    listItems = listItems.map((obj) => obj.id === id 
    ? {...obj, checked : !obj.checked}
    : obj);
    //setting the items array with the new array
    setItems(listItems);
    //saving the changes in the local storage

  }

  const handleDelete = async (id) => {
    // console.log(id)
    const listItems = items.filter( obj => obj.id !== id);
    setItems(listItems);

  }

  return (
    <div className="App">
      <Header title='Todo Website' 
            setNewItem={setNewItem} 
            newItem={newItem} 
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
            />
      <Content items={items==null ? [{id:1, checked: false, item: ''}] : items.filter(obj => obj.item.toLowerCase().includes(search.toLowerCase()) )}
              handleCheck={handleCheck}
              handleDelete={handleDelete}/>
      <Footer length={items.length}/>
      
    </div>
  );
}

export default App;
