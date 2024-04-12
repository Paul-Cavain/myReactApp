import { BsPlus } from "react-icons/bs"
import { useRef } from "react"

const AddItems = ( {newItem, setNewItem, handleSubmit} ) =>{
    const inputRef = useRef();
    return(
        <form className="flex flex-row justify-center mx-3 space-x-2 mt-2" onSubmit={handleSubmit}>
            <input 
                type="text" name="item" placeholder="Add item" className="w-full h-12 px-3 border-2 border-black rounded-md"
                required
                ref={inputRef}
                autoFocus
                value = {newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                name="button"
                aria-label="submit"
                className="bg-gray-200 w-10 border-2 border-black rounded-md hover:bg-green-500"
                onClick={() => inputRef.current.focus()}
            >

                <BsPlus className="text-4xl text-sky-600 " />
            </button>
        </form>
    )
}
export default AddItems