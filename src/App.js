import AddItem from './AddItem';
import Home from './Home'
import SearchItem from './SearchItem';
import ColorDisplay from './colorgenerator/ColorDisplay';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useState, useEffect } from "react";
import apiRequest from './apiRequest'

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [colorName, setColorName] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useEffect
  useEffect(() => {
    const fetchItems = async() => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not received expected data')
        const listItems = await response.json(); 
        setItems(listItems)
        setFetchError(null)
      } catch(err){
        setFetchError(err.message);
      } finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
    
  }, [])

  const handleColorChange = (e) => {
    console.log('')
  }

  const addItems = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked:false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems)

    // posting an item to api (db.json file)
    const postOptions = {
      method:  'POST',
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!newItem) return;

    // add item
    addItems(newItem)
    setNewItem('')
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item); 
    setItems(listItems);

    // updating item on check
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)

    //deleting item from an api
    const deleteOptions ={
      method: 'DELETE'
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if(result) setFetchError(result)
  }
  return(
    <section>
      <Navbar title={'Groceries Lists'} />
      <AddItem 
        newItem={newItem}
        setNewItem ={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <main>
        {isLoading && <p className='text-xl text-center mt-4'>Loading items.....</p>}
        {fetchError && <p className='text-red-500 text-xl text-center mt-3'>{`${fetchError}`}</p>}
        {!fetchError && !isLoading && <Home 
          items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        /> }
      </main>
      {/* <ColorDisplay 
        colorName = {colorName}
        setColorName = {setColorName}
        handleColorChange ={handleColorChange}

        // colorHex
        hexValue = {hexValue}
        setHexValue = {setHexValue}
      /> */}
      <Footer 
        length={items.length}
      />
    </section>
  )
}
export default App