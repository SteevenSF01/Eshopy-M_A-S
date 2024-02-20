import { useState } from 'react'
import './App.css'
import Discriptif from './assets/components/Discriptif/Discriptif'
import BtnPanier from './assets/components/BtnPanier/BtnPanier'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BtnPanier/>
    <Discriptif/>
           </>
  )
}

export default App
