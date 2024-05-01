const Navbar = ({title}) => {
    return (
        <nav className="py-4 text-2xl w-full bg-sky-400 text-white text-start px-2">
            <h1>{title}</h1>
        </nav>
    );
}

//default Navbar
Navbar.defaultProps = {
    title: 'Glocery List'
}

export default Navbar;