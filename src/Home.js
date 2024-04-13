import ItemList from "./ItemList";

const Home = ( {items, handleCheck, handleDelete} ) => {
    return (
        <main className="my-[5%] text-center">
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ) : (
                <p className="text-xl text-red-500 my-[20%]">
                    Your ShoppingList is Empty
                </p>
            )}
        </main>
    );
}

export default Home;