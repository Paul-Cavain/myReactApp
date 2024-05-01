import { BsTrash } from "react-icons/bs";

const LineItems = ({item, handleCheck, handleDelete}) => {
    return(
        <li className="bg-gray-200 my-2 h-12 flex flex-row justify-between" key={item.id}>
            <div className="flex flex-row justify-start place-items-center">
                <div>
                    <input 
                        type="checkbox"
                        checked={item.checked}
                        className="size-10 mx-2 mt-1 place-items-center"
                        onChange={() =>handleCheck(item.id)}
                    />
                </div>
                <div>
                    <label
                        style={item.checked ? {textDecoration: "line-through"}: null}
                        onDoubleClick={() =>handleCheck(item.id)}
                        className="text-xl flex place-items-center"
                    >
                        {item.item}
                    </label>
                </div>
            </div>
            <button
                onClick={() => handleDelete(item.id)}
                className="flex place-items-center">
                <BsTrash className="text-3xl mx-2 text-sky-600 hover:text-red-500"/>
            </button>
        </li>
    )
}
export default LineItems