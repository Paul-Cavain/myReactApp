1. Installation
2. Running React App
3. Components Creation and Re-using
4. Event click
    handling event click eg. button to display something
5. useState Hook
    getting a default value and set the values to a desired value
6. List and Keys
    list issue, displaying item list, delete item, saving it to a local storage, showing an empty message once all of the items are deleted
7. Prop Drilling
    Props: Sharing of data, properties and components
    Drilling: Passing data / properties from parent component to child component
    eg: App->Navbar, Footer, Home->ListItems->LineItems
8. Controlled Inputs
    Adding and deleting item from a list, Search for item from the list
9. Project Challenge:
    When we add the color name it should display the name of the added color and display its color too.
10. useEffect Hook
    it can run at every render
    useEffect(() =>{
    console.log('render')
  }) 
  
  and also at load time: we will only see its effect after changing the state of an item
  useEffect(() =>{
    console.log('at load time')
  }, [])