import { BsTrash } from "react-icons/bs"

const ItemsList = ( {items, handleCheck, handleDelete} ) =>{
    return (
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
    )
}
export default ItemsList