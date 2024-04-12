import ItemsList from "./ItemsList";

const Home = ({items, handleCheck, handleDelete}) => {

    return (
        <main className=" pt-[1%]">
            {items.length ? (
                <ItemsList 
                    items={items}
                    handleCheck ={handleCheck}
                    handleDelete = {handleDelete}
                />
                ) : (
                    <p className="text-center pt-20 text-red-600 text-lg">Your List is Empty!</p>
                )}
        </main>
    );
}

export default Home;