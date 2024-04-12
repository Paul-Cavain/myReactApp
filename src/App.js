import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import { useState } from 'react';
import AddItems from './AddItems';
import SearchItem from './SearchItem';

function App() {

  // List and Keys
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("Shoppinglist")))

  const setAndSaveItem = (newItems) => {
    setItems(newItems)
    localStorage.setItem('Shoppinglist', JSON.stringify(newItems));
  }

  const handleCheck = ((id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItem(listItems)
  }) 

  // function for deleting an item
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItem(listItems)
  }

  const [search, setSearch] = useState("")


  // adding new Item
  const AddItem = (item) =>{
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = { id, checked:false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems)
  }

  const [newItem, setNewItem] = useState('');

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return ;
    console.log(newItem)

    // add item
    AddItem(newItem)
    setNewItem('')
  }

  return (
    <div className="">
      <section>
        <div>
          <Navbar title={'React Js'} />
        </div>
        <div>
          
          <AddItems 
            newItem={newItem}
            setNewItem ={setNewItem}
            handleSubmit={handleSubmit}
          />
          <SearchItem 
            search={search}
            setSearch ={setSearch}
          />
          <Home 
            items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'Learning React'
}

export default App;
