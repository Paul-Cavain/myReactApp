import AddItem from './AddItem';
import Home from './Home'
import SearchItem from './SearchItem';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingList')));

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItem = (newItem) =>{
    setItems(newItem)
    localStorage.setItem('ShoppingList', JSON.stringify(newItem))
  }

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked:false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!newItem) return;

    // add item
    addItems(newItem)
    setNewItem('')
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setAndSaveItem(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItem(listItems)
  }
  return(
    <section>
      <Navbar title={'Learning React'}/>
      <AddItem 
        newItem={newItem}
        setNewItem ={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Home 
        items = {items.filter(item => ((item.item).toLocaleLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </section>
  )
}
export default App