import { useState } from "react";
import "./App.css";
import Discriptif from "./assets/components/Discriptif/Discriptif";
import Navbar from "./assets/components/navbar/Navbar";
import Card from "./assets/components/Card/Card";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Card />
      <Discriptif />
    </>
  );
}

export default App;
