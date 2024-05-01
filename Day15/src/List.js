import ListItems from "./ListItems"

const List = ({ items }) => {
    return(
        <ul className="mt-16 m-3">
            {items.map((item) => (
                <ListItems 
                    key={item.id} 
                    item={item} 
                />
            ))}
        </ul>
    )
}
export default List  