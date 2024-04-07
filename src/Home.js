import { useState } from "react"
import { BsTrash } from "react-icons/bs"

const Home = () => {

    // List and Keys
    const [items, setItems] = useState([
        {
            id: 1, 
            checked: true,
            item: "item1"
        },
        {
            id: 2, 
            checked: false,
            item: "item2"
        },
        {
            id: 3, 
            checked: false,
            item: "item3"
        }
    ])
    const handleCheck = ((id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
        setItems(listItems)

        //saving items to the local storage
        localStorage.setItem('Shoppinglist', JSON.stringify(listItems));
    })

    // function for deleting an item
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('Shoppinglist', JSON.stringify(listItems));
    }

    
    return (
        <main className=" pt-[5%]">
            <h1 className="text-3xl text-center">List and Keys</h1>
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="items flex flex-row justify-between text-2xl m-3 px-10 bg-gray-400 py-3" key={item.id}>
                        <div className="flex justify-start gap-2">
                            <input
                                className="size-10 cursor-pointer"
                                onChange={() => handleCheck (item.id)} 
                                type="checkbox" 
                                checked={item.checked} 
                            />
                            <label onDoubleClick={() => handleCheck (item.id)} style={(item.checked) ? {textDecoration: 'line-through' } : null}>
                                {item.item}
                            </label>
                        </div>
                        <BsTrash 
                            onClick={() => handleDelete(item.id)} 
                            className="text-4xl text-blue-700 hover:text-red-600"
                            role="button" tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p className="text-center pt-20 text-red-600 text-lg">Your List is Empty!</p>
            )}
        </main>
    );
}

export default Home;