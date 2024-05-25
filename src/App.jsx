// import { useState } from 'react'
import './App.css'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <header className="form container">
                <h1 className="form-heading">Flow</h1>
                <div className="input">
                    <input type="text" className="input-control" placeholder="What's next to do?"/>
                    <button className="input-submit">Create</button>
                </div>
            </header>
        </>
    )
}

export default App
