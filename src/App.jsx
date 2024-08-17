import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3x1">
        <button onClick={()=>setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"red"}}>red</button>
        <button onClick={()=>setColor("Green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"green"}}>Green</button>
        <button onClick={()=>setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"blue"}}>Blue</button>
        <button onClick={()=>setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"yellow"}}>yelloe</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
