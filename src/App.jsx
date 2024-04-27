import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className="text-2xl font-semibold text-slate-900">This is my count: {count}</h1>
    <button 
      className="text-xs font-semibold bg-violet-500 text-violet-50 rounded-lg px-5 py-2 mt-4 font-sans" 
      onClick={() => setCount(count + 1)}
    >Click me</button>
   </>
  )
}

export default App
