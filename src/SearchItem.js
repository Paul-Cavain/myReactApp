const SearchItem = ( {search, setSearch} ) =>{
    return(
        <form onSubmit={(e) => e.preventDefault()} className="mx-3 mt-6 border-2 border-black rounded-md">
            <input 
                type="text"
                placeholder="search item"
                role="searchbox"
                className="w-full h-12 px-3"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    )
}
export default SearchItem