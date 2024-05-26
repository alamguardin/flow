import { useState } from 'react'
import './App.css'

function App() {
    const [list, setList] = useState([])
    const [description, setDescription] = useState('')

    function createItem() {
        const item = {
            id: Date.now(),
            description: description,
            status: false
        }

        let cloneList = [...list]
        cloneList.push(item)

        setList(cloneList)
        setDescription('')
    }

    function updateItem(e) {
        let cloneList = [...list]
        const indexToUpdate = cloneList.findIndex(item => item.id === Number(e.target.dataset.id))

        cloneList[indexToUpdate].status = !cloneList[indexToUpdate].status

        setList(cloneList)
    }

    function deleteItem(id) {
        let cloneList = [...list].filter(item => item.id !== Number(id))
        console.log(cloneList)
        setList(cloneList)
    }

    return (
        <>
            <header className="form container">
                <h1 className="form-heading">Flow</h1>
                <div className="input">
                    <input type="text" className="input-control" placeholder="What's next to do?" onChange={(e) => setDescription(e.target.value)} value={description}/>
                    <button className="input-submit" onClick={createItem}>Create</button>
                </div>
            </header>
            <div className="list container">
                <ul className="list-container">
                    {
                        list.map(item =>
                            <li className="item" key={item.id}>
                                <input type="checkbox" className="item-checkbox" data-id={item.id} onClick={updateItem}/>
                                <span className="item-text">{item.description}</span>
                                <div className="dropdown">
                                    <button className="dropdown-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item" data-id={item.id} onClick={() => deleteItem(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z"></path></svg>
                                            <span>Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default App
