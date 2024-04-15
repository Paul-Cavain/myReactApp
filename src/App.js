import AddItem from './AddItem';
import Home from './Home'
import SearchItem from './SearchItem';
import ColorDisplay from './colorgenerator/ColorDisplay';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingList')) || []);

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [colorName, setColorName] = useState('')
  const [hexValue, setHexValue] = useState('')

  //useEffect
  useEffect(() => {
    localStorage.setItem('ShoppingList', JSON.stringify(items))
  }, [items])

  const handleColorChange = (e) => {
    console.log('')
  }

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked:false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems)
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
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)
  }
  return(
    <section>
      <Navbar title={'Learning React'}/>
      <AddItem 
        newItem={newItem}
        setNewItem ={setNewItem}
        handleSubmit={handleSubmit}
      />
      {/* <SearchItem 
        search = {search}
        setSearch = {setSearch}
      /> */}
      <Home 
        items = {items.filter(item => ((item.item).toLocaleLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <ColorDisplay 
        colorName = {colorName}
        setColorName = {setColorName}
        handleColorChange ={handleColorChange}

        // colorHex
        hexValue = {hexValue}
        setHexValue = {setHexValue}
      />
      <Footer 
        length={items.length}
      />
    </section>
  )
}
export default App