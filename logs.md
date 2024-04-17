1. Installation and Running React App
2. Components Creation and Re-using
3. Event click
    handling event click eg. button to display something
4. useState Hook
    getting a default value and set the values to a desired value
5. List and Keys
    list issue, displaying item list, delete item, saving it to a local storage, showing an empty message once all of the items are deleted
6. Prop Drilling
    Props: Sharing of data, properties and components
    Drilling: Passing data / properties from parent component to child component
    eg: App->Navbar, Footer, Home->ListItems->LineItems
7. Controlled Inputs
    Adding and deleting item from a list, Search for item from the list
8. Project Challenge:
    When we add the color name it should display the name of the added color and display its color too.
9. useEffect Hook
    it can run at every render
    useEffect(() =>{
    console.log('render')
  }) 
  
  and also at load time: we will only see its effect after changing the state of an item
  useEffect(() =>{
    console.log('at load time')
  }, [])
10. JSON Server
11. Fetch API Data
12. CRUD Operations (posting item, update item and delete item) to  api (db.json file)