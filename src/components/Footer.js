const Footer = ({length}) => {
    const today = new Date();
    return (
        <footer className="bg-gray-300 py-3 text-center bottom-0 fixed left-0 right-0">
            <p>
                Copyright &copy; {today.getFullYear()}
            </p>
            {/* <p>
                {length} List {length === 1 ? 'item' : 'items'}
            </p> */}
        </footer>
    );
}

export default Footer;