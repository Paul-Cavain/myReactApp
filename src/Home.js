import { useState } from "react"

const Home = () => {

    // useState Hook
    const [name, setName] = useState('Bob')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const name = ['React', 'Bob', 'Justine']
        const init = Math.floor(Math.random() *3)
        setName(name[init])
    }

    // event click
    const handleClick = () =>{
        setCount(count + 1);
        console.log(count)
    }

    // event click with parameter
    const handleClick2 = (name) =>{
        console.log(count)
    }
    // handling event in event click
    const handleClick3 = (e) =>{
        console.log(e.target.innerText)
    }
    
    return (
        <main className="grid space-y-4 justify-center pt-[40%]">
            {/* random name change diaplayed */}
            <div className="mx-1">
                <p>
                    Hi {name}!
                </p>
            </div>
            
            <div className="grid gap-4">
                <button onClick={handleNameChange} className="text-center bg-sky-400 py-2 w-32">Change Name</button>

                <button onClick={handleClick} className="text-center bg-sky-400 py-2 w-28">ClickMyName</button>

                <button onClick={handleClick2} className="text-center bg-sky-400 py-2 w-32">ClickHandleEvent</button>
            </div>
            
        </main>
    );
}

export default Home;