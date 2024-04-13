import LineItems from "./LineItems"


const ItemList = ({items, handleCheck, handleDelete}) => {
    return(
        <ul className="mx-3">
            {items.map((item) => (
                <LineItems 
                    key={item.id}
                    item = {item}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ))}
        </ul>
    )
}
export default ItemList