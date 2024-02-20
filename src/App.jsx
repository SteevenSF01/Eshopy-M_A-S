import { useState } from "react";
import "./App.css";
import Discriptif from "./assets/components/Discriptif/Discriptif";
import Navbar from "./assets/components/navbar/Navbar";
import Card from "./assets/components/Card/Card";
import Sidebar from "./assets/components/Sidebar/Sidebar";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Sidebar/>
      {/* <Card />
      <Discriptif/> */}
    </>
  );
}

export default App;
