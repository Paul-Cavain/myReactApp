const Home = () => {
    const handleNameChange = () => {
        const name = ['Kelvin', 'Bob', 'Justine']
        const init = Math.floor(Math.random() *3)
        return name[init]
    }
    
    return (
        <main className="flex place-content-center pt-[40%]">
            {/* random name change diaplayed */}
            <p>
                Hi {handleNameChange()}!
            </p>
        </main>
    );
}

export default Home;