const SearchItem = ({search, setSearch}) => {
    return(
        <form className="mx-3">
            <input 
                type="text"
                placeholder="Search Item"
                className="rounded-md border-2 border-black w-full h-12 mt-3 px-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}
export default SearchItem;