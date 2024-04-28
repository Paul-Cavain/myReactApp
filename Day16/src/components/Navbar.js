import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
    return(
        <nav className="bg-black pt-2 md:flex-col left-0 right-0 top-0 fixed mt-14 mx-20 flex-grow-1">
            <form onSubmit={(e) =>e.preventDefault()}>
                <label htmlFor="search"></label>
                <input 
                    type="text"
                    placeholder="Search Posts"
                    className="flex justify-start h-10 mx-4 rounded-sm w-3/4 px-2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul className="flex flex-row space-x-2 pt-2 mx-3 text-white">
                <li className="hover:bg-gray-100 hover:text-black w-14 h-8"><Link to='/'>Home</Link></li>
                <li className="hover:bg-gray-100 hover:text-black w-14 h-8"><Link to='/post'>Post</Link></li>
                <li className="hover:bg-gray-100 hover:text-black w-14 h-8"><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;