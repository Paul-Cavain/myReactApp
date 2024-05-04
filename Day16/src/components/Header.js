const Header = ({ title }) => {
    return(
        <section className="bg-sky-300 text-2xl py-3 text-start px-3 fixed top-0 left-0 right-0 mx-20 flex-grow-0 mx-6">
            <h1>{title}</h1>
        </section>
    );
}
export default Header;