import { useState } from 'react'
import './App.css'
import CreateGroupForm from './components/CreateGroupForm'

function App() {
  const [list, setList] = useState([])

  function addTask(task) {
    const objTask = {
      id: Math.floor(Math.random(1) * 100),
      content: task
    }

    let newList = list
    newList.push(objTask)
    console.log(newList)
    setList(newList)
  }

  const tasksList = list.map(task => 
    <li key={task.id}>{task.content}</li>
  )

  return (
   <>
    <CreateGroupForm action={addTask}></CreateGroupForm>
    <ul>{tasksList}</ul>
   </>
  )
}

export default App
