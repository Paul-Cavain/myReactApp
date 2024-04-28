const Footer = () => {
    const today = new Date();   
    return(
        <section className="fixed bottom-0 left-0 right-0 bg-gray-700 py-4 text-white text-lg flex-grow-1 mx-20">
            <h1>Copyright &copy; {today.getFullYear()}</h1>
        </section>
    );
}
export default Footer;