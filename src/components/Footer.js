const Footer = () => {
    const today = new Date();
    return (
        <footer className="bg-gray-200 py-3 text-center bottom-0 fixed left-0 right-0">
            <p>
                Copyright &copy; {today.getFullYear()}
            </p>
        </footer>
    );
}

export default Footer;