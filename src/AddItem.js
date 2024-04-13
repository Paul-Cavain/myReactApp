import { useRef } from "react"
import { BsPlus } from "react-icons/bs"

const AddItem = ({newItem, setNewItem, handleSubmit}) =>{
    const inputRef = useRef();
    return(
        <form className="flex flex-row mx-3 mt-3 space-x-1" onSubmit={handleSubmit}>
            <input
                autoFocus 
                ref={inputRef}
                type="text"
                placeholder="Add Item"
                className="h-12 w-full rounded-md border-2 px-3 border-black"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                className="border-2 hover:bg-green-500 border-black h-12 w-10 rounded-md"
                onClick={() => inputRef.current.focus()}
            >
                <BsPlus className="text-sky-600 text-4xl"/>
            </button>
        </form>
    )
}
export default AddItem