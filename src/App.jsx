import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className="text-3xl font-bold underline animate-wiggle animate-twice ">
      Hello monde
    </h1>    </>
  )
}

export default App
