import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';


function App() {
  const API_URL_USERS = 'https://jsonplaceholder.typicode.com/' 
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState('users');


  useEffect (() => {
    const fetchItems = async() =>{
      try{
        const response = await fetch(`${API_URL_USERS}${reqType}`);
        const data = await response.json();
        setItems(data);
      }catch(err) {
        console.log(err);
      }
    }
    fetchItems()
  }, [reqType]);


  return (
    <section>
      <Form 
        reqType = {reqType} 
        setReqType={setReqType} 
      />

      <List
        items = {items}
      />
      
    </section>
  );
}

export default App;
